import { useRef } from "react";
import Slider from "react-slick";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import SectionHeader from "../../components/SectionHeader";
import { products } from "../../utils/products";

const Products = () => {
  const sliderRef = useRef<Slider>(null);
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 md:py-14">
      <SectionHeader
        primaryText="Our Products"
        title="Explore Our Products"
        showArrows
        onNextClick={handleNext}
        onPrevClick={handlePrev}
      >
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {products.map((item) => (
              <div className="pr-2 md:pr-4" key={item.id}>
                <ProductCard product={item} />
              </div>
            ))}
          </Slider>
          <div className="pt-10 flex items-center justify-center">
            <Button text="View All Products" />
          </div>
        </div>
      </SectionHeader>
    </div>
  );
};

export default Products;
