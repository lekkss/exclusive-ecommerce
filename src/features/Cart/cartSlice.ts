import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/types";
import { RootState } from "../../app/store";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const loadCartFromLocalStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return {
        items: [],
        totalAmount: 0,
      }; // Default initial state
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Failed to load cart from localStorage", error);
    return {
      items: [],
      totalAmount: 0,
    };
  }
};

const initialState: CartState = loadCartFromLocalStorage();

const calculateDiscountedPrice = (product: Product) => {
  if (product.discountType === "percent") {
    return product.price - (product.price * product.discount) / 100;
  } else if (product.discountType === "fixed") {
    return product.price - product.discount;
  }
  return product.price;
};

const saveCartToLocalStorage = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    console.error("Failed to save cart to localStorage", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        const newCartItem: CartItem = {
          ...product,
          quantity: 1,
        };
        state.items.push(newCartItem);
      }

      const discountedPrice = calculateDiscountedPrice(product);
      state.totalAmount += discountedPrice;

      // Save to localStorage
      saveCartToLocalStorage(state);
    },

    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      const productId = action.payload.id;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem) {
        const discountedPrice = calculateDiscountedPrice(existingItem);
        state.totalAmount -= discountedPrice * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== productId);
      }

      // Save to localStorage
      saveCartToLocalStorage(state);
    },

    increaseQuantity(state, action: PayloadAction<{ id: number }>) {
      const productId = action.payload.id;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem) {
        existingItem.quantity++;
        const discountedPrice = calculateDiscountedPrice(existingItem);
        state.totalAmount += discountedPrice;
      }

      // Save to localStorage
      saveCartToLocalStorage(state);
    },

    decreaseQuantity(state, action: PayloadAction<{ id: number }>) {
      const productId = action.payload.id;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        const discountedPrice = calculateDiscountedPrice(existingItem);
        state.totalAmount -= discountedPrice;
      } else {
        const discountedPrice = calculateDiscountedPrice(existingItem!);
        state.totalAmount -= discountedPrice;
        state.items = state.items.filter((item) => item.id !== productId);
      }

      // Save to localStorage
      saveCartToLocalStorage(state);
    },

    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;

      // Save to localStorage
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotalAmount = (state: RootState) =>
  state.cart.totalAmount;
export const selectCartItemCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
