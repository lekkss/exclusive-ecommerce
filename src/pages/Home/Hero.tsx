import { useState } from "react";
import { sectionCategories } from "../../utils/categories";
import { Icon } from "@iconify/react";
import Text from "../../components/Text";
import Slider from "react-slick";

import apple from "../../assets/apple.svg";
import phone from "../../assets/iphone-hero.png";

export const Hero = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (section: string, hasSubSections: boolean) => {
    if (hasSubSections) {
      // Toggle subsection visibility if there are subsections
      setExpandedSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    } else {
      // Navigate to the section if there are no subsections
      window.location.href = "/";
    }
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots", // Add custom class for styling
    customPaging: () => (
      <div className="custom-dot">
        <div className="bg-red-400"></div>
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="pb-14">
      <div className="grid grid-cols-5">
        <div className="hidden md:block col-span-1 border-r pt-10">
          {sectionCategories.map((item) => (
            <ul key={item.section} className="list-none py-2">
              <li>
                <span
                  onClick={() =>
                    toggleSection(item.section, item.subSection.length > 0)
                  }
                  className="flex items-center justify-between cursor-pointer"
                >
                  <a href="/">
                    <Text color="black">{item.section}</Text>
                  </a>
                  {item.subSection.length > 0 && (
                    <span className="mr-2">
                      {expandedSections[item.section] ? (
                        <Icon icon="mingcute:down-line" className="w-5 h-5" />
                      ) : (
                        <Icon icon="mingcute:up-line" className="w-5 h-5" />
                      )}
                    </span>
                  )}
                </span>

                {/* Render subsections if the section is expanded */}
                {item.subSection.length > 0 &&
                  expandedSections[item.section] && (
                    <ul className="ml-2">
                      {item.subSection.map((subItem) => (
                        <li key={subItem.name} className="py-2">
                          <a href="/">
                            <Text color="black">{subItem.name}</Text>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            </ul>
          ))}
        </div>
        <div className="col-span-5 md:col-span-4 pt-10 md:pl-10">
          <Slider {...settings}>
            <div>
              <div className="bg-black items-center justify-between flex p-5 md:p-16 relative">
                {/* 1 */}
                <div className="flex flex-col gap-4 md:pl-10">
                  <div className="flex gap-6 items-center">
                    <img src={apple} alt="" />
                    <Text weight="light">iPhone 14 Series</Text>
                  </div>
                  <Text className="text-4xl font-semibold md:text-[50px] md:leading-[60px]">
                    Up to 10% <br />
                    off Voucher
                  </Text>
                  <div className="flex items-center gap-3">
                    <Text weight="light" className="underline">
                      Shop Now
                    </Text>
                    <Icon icon="ep:right" className="text-white" />
                  </div>
                </div>
                {/* 2 */}
                <div className="hidden md:block">
                  <img src={phone} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-black items-center justify-between flex p-5 md:p-16 relative">
                {/* 1 */}
                <div className="flex flex-col gap-4 md:pl-10">
                  <div className="flex gap-6 items-center">
                    <img src={apple} alt="" />
                    <Text weight="light">iPhone 14 Series</Text>
                  </div>
                  <Text className="text-4xl font-semibold md:font-bold md:text-[50px] md:leading-[60px]">
                    Up to 10% <br />
                    off Voucher
                  </Text>
                  <div className="flex items-center gap-3">
                    <Text weight="light" className="underline">
                      Shop Now
                    </Text>
                    <Icon icon="ep:right" className="text-white" />
                  </div>
                </div>
                {/* 2 */}
                <div className="hidden md:block">
                  <img src={phone} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
