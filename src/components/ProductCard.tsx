import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Product } from "./types";

import AddToWishList from "./buttons/AddToWishList";
import AddToCart from "./buttons/AddToCart";
import RemoveFromWishlist from "./buttons/RemoveFromWishList";

interface ProductCardProps {
  product: Product;
  isWishlistPage?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  isWishlistPage,
  product,
}) => {
  const [hovered, setHovered] = useState(false);

  const discountedPrice =
    product.discountType === "percent"
      ? (product.price - (product.price * product.discount) / 100).toFixed(2)
      : (product.price - product.discount).toFixed(2);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Section */}
      <div className="flex items-center justify-center relative bg-[#F5F5F5] p-4 md:py-10">
        {/* Tag (e.g. Discount) */}
        {product.tag === "discount" && product.discountType === "percent" ? (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-normal py-1 px-2 rounded">
            -{product.discount}%
          </span>
        ) : (
          product.tag !== "discount" &&
          product.tag !== null && (
            <span className="absolute top-2 left-2 bg-pry text-white text-xs font-normal py-1 px-2 rounded">
              {product.tag}
            </span>
          )
        )}

        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {isWishlistPage ? (
            // Show delete icon if on wishlist page
            <RemoveFromWishlist product={product} />
          ) : (
            <>
              {/* Wishlist Button */}
              <AddToWishList product={product} />
              {/* View icon */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Icon
                  icon="mdi:eye-outline"
                  className="w-5 h-5 text-gray-500 cursor-pointer"
                />
              </div>
            </>
          )}
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-1/2 h-40 object-contain"
        />

        {/* Add to Cart / Remove from Cart button on hover */}
        {hovered && <AddToCart product={product} />}
      </div>

      {/* Details Section */}
      <div className="p-4 flex flex-col space-y-2">
        {/* Product Name */}
        <h3 className="text-lg font-semibold whitespace-nowrap truncate">
          {product.name}
        </h3>

        <div className="flex items-center space-x-2">
          {product.discount > 0 ? (
            <>
              <span className="text-pry font-semibold text-lg">
                ${discountedPrice}
              </span>
              <span className="text-gray-400 line-through">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-black font-semibold text-lg">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating and Number of User Ratings */}
        {!isWishlistPage && (
          <div className="flex items-center space-x-1">
            {/* Render stars */}
            {Array.from({ length: 5 }, (_, i) => (
              <Icon
                key={i}
                icon={i < product.rating ? "mdi:star" : "mdi:star-outline"}
                className="w-4 h-4 text-yellow-500"
              />
            ))}
            {/* Number of User Ratings */}
            <span className="text-gray-500 text-sm">
              ({product.noUserRatings})
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
