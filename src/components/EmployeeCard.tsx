import { Icon } from "@iconify/react";
import Text from "./Text";

type EmployeeCardPropType = {
  image: string;
  name: string;
  position: string;
  socials: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
};
const EmployeeCard = ({
  image,
  name,
  position,
  socials,
}: EmployeeCardPropType) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-[#F5F5F5] flex items-end justify-center h-[430px] rounded">
        <img className="" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <Text color="black" size="3xl">
          {name}
        </Text>
        <Text color="black" size="base" weight="light">
          {position}
        </Text>
        <div className="flex items-center gap-2">
          <a href={socials.twitter}>
            <Icon icon="line-md:twitter" className="w-5 h-5" />
          </a>
          <a href={socials.instagram}>
            <Icon icon="line-md:instagram" className="w-5 h-5" />
          </a>
          <a href={socials.linkedin}>
            <Icon icon="ri:linkedin-line" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
