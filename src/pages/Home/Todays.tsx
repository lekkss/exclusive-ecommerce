import { useRef } from "react";
import Slider from "react-slick";
import CountdownTimer from "../../components/CountDownTimer";
import SectionHeader from "../../components/SectionHeader";
import { flashSales } from "../../utils/products";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";

const Todays = () => {
  const sliderRef = useRef<Slider>(null);
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  // Function to handle previous slide
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: false,
    className: "",
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  return (
    <div className="py-10 md:py-14 border-b">
      <SectionHeader
        primaryText="Today's"
        title="Flash Sales"
        showArrows
        onNextClick={handleNext}
        onPrevClick={handlePrev}
        subComponent={<CountdownTimer endDate="2024-10-20T23:59:59Z" />}
      >
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {flashSales.map((item) => (
              <div className="md:p-4 p-2" key={item.id}>
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

export default Todays;
