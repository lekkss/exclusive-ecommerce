import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../../features/Wishlist/wishlistSlice";
import { Product } from "../types";
type PropType = {
  product: Product;
};
const AddToWishList = ({ product }: PropType) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems); // Get wishlist items from the Redux store
  // Handle Add to Wishlist
  const handleWishlistToggle = () => {
    const existingItem = wishlistItems.find((item) => item.id === product.id);
    if (existingItem) {
      dispatch(removeFromWishlist({ id: product.id })); // Remove from wishlist if it exists
    } else {
      dispatch(addToWishlist(product)); // Add to wishlist if it doesn't exist
    }
  };

  const isInWishlist = wishlistItems.some((item) => item.id === product.id); // Check if product is in wishlist
  return (
    <button
      className={`w-10 h-10 rounded-full flex items-center justify-center ${
        isInWishlist ? "bg-red-500" : "bg-white"
      } transition duration-200`}
      onClick={handleWishlistToggle}
    >
      <Icon
        icon={isInWishlist ? "mdi:heart" : "mdi:heart-outline"}
        className={`w-5 h-5 ${isInWishlist ? "text-white" : "text-gray-500"}`}
      />
    </button>
  );
};

export default AddToWishList;
