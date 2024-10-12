import { useRef } from "react";
import Slider from "react-slick";
import SectionHeader from "../../components/SectionHeader";
import camera from "../../assets/categories/Category-Camera.svg";
import headphone from "../../assets/categories/Category-Headphone.svg";
import computer from "../../assets/categories/Category-Computer.svg";
import smartwatch from "../../assets/categories/Category-SmartWatch.svg";
import gaming from "../../assets/categories/Category-Gamepad.svg";
import phones from "../../assets/categories/Category-CellPhone.svg";
import Text from "../../components/Text";

const Categories = () => {
  const sliderRef = useRef<Slider>(null);
  const categories = [
    {
      name: "phones",
      icon: phones,
    },
    {
      name: "computers",
      icon: computer,
    },
    {
      name: "smartwatch",
      icon: smartwatch,
    },
    {
      name: "camera",
      icon: camera,
    },
    {
      name: "headphones",
      icon: headphone,
    },
    {
      name: "gaming",
      icon: gaming,
    },
  ];
  const settings = {
    className: "",
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
          slidesToShow: 2.5,
        },
      },
    ],
  };
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  // Function to handle previous slide
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <div className="py-10 md:py-14 border-b">
      <SectionHeader
        primaryText="Categories"
        title="Broswe By Category"
        showArrows
        onNextClick={handleNext}
        onPrevClick={handlePrev}
      >
        <Slider ref={sliderRef} {...settings}>
          {categories.map((item) => (
            <div className="pr-2 md:pr-4" key={item.name}>
              <div className="border flex-col gap-6 border-gray-200 rounded aspect-auto flex items-center justify-center p-7">
                <img src={item.icon} alt={item.name} className="w-10 h-10" />
                <Text color="black" className="capitalize text-center">
                  {item.name}
                </Text>
              </div>
            </div>
          ))}
        </Slider>
      </SectionHeader>
    </div>
  );
};

export default Categories;
