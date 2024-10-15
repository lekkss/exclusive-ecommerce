import { useParams } from "react-router-dom";
import { products } from "../../utils/products";
import Breadcrumb from "../../components/BreadCrumb";
import NotFound from "../../pages/NotFound";
import { useState } from "react";
import AddToWishList from "../../components/buttons/AddToWishList";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const mainImage = product?.image;

  const sizes = ["XS", "S", "M", "L", "XL"];

  const handleQuantityChange = (change: number) => {
    setQuantity((prev: number) => Math.max(1, prev + change));
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: product ? product.name : "Not Found" },
  ];

  if (product) {
    return (
      <div>
        <div className="container mx-auto py-28 px-5">
          <Breadcrumb items={breadcrumbItems} />
          <div className=" py-2 flex flex-col md:flex-row gap-10">
            {/* Left Section - Image Gallery */}
            <div className="flex md:w-2/3 flex-row md:flex-col gap-4">
              <div className="flex flex-col items-center space-y-4">
                {/* Product Images or Placeholders */}
                {/* {product.images.slice(0, 4).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Product thumbnail ${idx + 1}`}
                    className="w-20 h-20 object-cover border rounded"
                  />
                ))} */}
                {/* Placeholder Boxes if less than 4 images */}
                {/* {product.images.length < 4 &&
                  Array.from(Array(4 - product.images.length)).map((_, idx) => (
                    <div
                      key={idx}
                      className="w-20 h-20 bg-gray-200 border rounded"
                    />
                  ))} */}
              </div>
              <div className="flex-grow">
                {/* Main Product Image */}
                <img
                  src={mainImage}
                  alt="Main product"
                  className=" h-fit object-cover border rounded"
                />
              </div>
            </div>

            {/* Right Section - Product Information */}
            <div className="flex flex-col gap-4 md:w-1/3">
              {/* Product Name */}
              <h1 className="text-2xl font-bold">{product.name}</h1>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-2">
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <svg
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < product.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1L12 2z" />
                    </svg>
                  ))}
                </div>
                {/* Number of reviews */}
                <p className="text-gray-500">
                  ({product.noUserRatings} reviews)
                </p>
              </div>

              {/* Size Selector */}
              <div className="flex gap-4 items-center">
                <p className="font-semibold">Size:</p>
                <div className="flex space-x-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 border rounded ${
                        selectedSize === size
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex ">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-12 py-1 text-center border rounded"
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                {/* Buy Now and Favorite */}
                <div className="flex items-center gap-4 bg-red-200">
                  <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                    Buy Now
                  </button>
                </div>
                <button className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full">
                  {/* Heart icon for favorite */}
                  <AddToWishList product={product} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <NotFound />;
};

export default ProductDetailsPage;
