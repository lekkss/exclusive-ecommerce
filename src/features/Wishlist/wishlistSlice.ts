import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/types";
import { RootState } from "../../app/store";

interface WishlistState {
  items: Product[];
}

const loadWishlistFromLocalStorage = (): WishlistState => {
  try {
    const serializedState = localStorage.getItem("wishlist");
    if (serializedState === null) {
      return { items: [] };
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Failed to load form localStorage", error);
    return {
      items: [],
    };
  }
};

const initialState: WishlistState = loadWishlistFromLocalStorage();

const saveWishListToLocalStorage = (state: WishlistState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("wishlist", serializedState);
  } catch (error) {
    console.error("Failed to save wishlist to localStorage", error);
  }
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id == product.id);
      if (!existingItem) {
        state.items.push(product);
      }
      // Save to localStorage
      saveWishListToLocalStorage(state);
    },

    removeFromWishlist(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      // Save to localStorage
      saveWishListToLocalStorage(state);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;

// Selector to get wishlist items
export const selectWishlistItems = (state: RootState) => state.wishlist.items;
export const wishlistCount = (state: RootState) => state.wishlist.items.length;
