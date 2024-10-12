import React from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { Product } from "../types";
import { removeFromWishlist } from "../../features/Wishlist/wishlistSlice";

interface RemoveFromWishlistProps {
  product: Product;
}

const RemoveFromWishlist: React.FC<RemoveFromWishlistProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist({ id: product.id }));
  };

  return (
    <button
      className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
      onClick={handleRemoveFromWishlist}
    >
      <Icon icon="proicons:delete" className="w-5 h-5 text-black" />
    </button>
  );
};

export default RemoveFromWishlist;
