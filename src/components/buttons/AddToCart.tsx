import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/Cart/cartSlice";
import { Product } from "../types";
import { RootState } from "../../app/store";

type PropType = {
  product: Product;
};
const AddToCart = ({ product }: PropType) => {
  const dispatch = useDispatch();

  // Access cart items from Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Check if the product is in the cart
  const isInCart = cartItems.some((item) => item.id === product.id);

  // Handle Add to Cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  // Handle Remove from Cart
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id: product.id }));
  };
  return isInCart ? (
    <button
      className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 bg-pry text-white text-sm py-3 px-4 rounded-b"
      onClick={handleRemoveFromCart}
    >
      Remove from Cart
    </button>
  ) : (
    <button
      className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-3 px-4 rounded-b"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
