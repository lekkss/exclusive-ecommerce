import { useSelector } from "react-redux";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { selectWishlistItems, wishlistCount } from "./wishlistSlice";
import ProductCard from "../../components/ProductCard";
import { bestSeller } from "../../utils/products";

const WishlistPage = () => {
  const wishlist = useSelector(wishlistCount);
  const wishlistItems = useSelector(selectWishlistItems);
  return (
    <div className="">
      <div className="container mx-auto py-28 px-5">
        <div className="flex items-center justify-between">
          <Text color="black" size="lg">
            Wishlist ({wishlist})
          </Text>
          <Button
            text="Move All To Bag"
            className="border"
            color="white"
            textColor="black"
          />
        </div>
        <div className="grid grid-cols-2 md:gap-4 gap-2  md:grid-cols-4 py-5">
          {wishlistItems.map((item) => (
            <div key={item.id}>
              <ProductCard isWishlistPage product={item} />
            </div>
          ))}
        </div>
        {/*  */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2 items-center">
            <div className="h-8 w-4 bg-pry rounded"></div>
            <Text color="black" size="lg">
              Just For You
            </Text>
          </div>
          <Button
            text="See All"
            className="border"
            color="white"
            textColor="black"
          />
        </div>
        <div className="grid grid-cols-2 md:gap-4 gap-2 md:grid-cols-4 pt-5">
          {bestSeller.map((item) => (
            <div key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
