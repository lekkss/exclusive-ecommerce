import ProductCard from "../../components/ProductCard";
import SectionHeader from "../../components/SectionHeader";
import { bestSeller } from "../../utils/products";

const BestSeller = () => {
  return (
    <div className="py-10 md:py-14">
      <SectionHeader
        primaryText="This Month"
        title="Best Selling Products"
        showViewAllButton
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {bestSeller.map((item) => (
            <div className="md:p-4 p-2" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </SectionHeader>
    </div>
  );
};

export default BestSeller;
