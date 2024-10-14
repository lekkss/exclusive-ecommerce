import { Icon } from "@iconify/react/dist/iconify.js";

interface StatisticsCardProps {
  icon: string;
  heading: string;
  subheading: string;
  color?: "red" | "white";
}

const StatisticsCard = ({
  icon,
  heading,
  subheading,
  color = "white",
}: StatisticsCardProps) => {
  return (
    <div
      className={`flex flex-col justify-evenly items-center p-4 border rounded w-full aspect-square md:w-[270px] md:h-[230px] ${
        color == "red" ? "bg-pry text-white shadow-md" : "bg-white text-black"
      }`}
    >
      {/* Icon Container */}
      <div className="relative flex items-center justify-center mb-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center ${
            color == "red" ? "bg-[#E67C7C]" : "bg-grey2"
          }`}
        >
          <div
            className={`w-12 h-12 p-2 rounded-full flex items-center justify-center ${
              color == "red" ? "bg-white" : "bg-black"
            }`}
          >
            <Icon
              icon={icon}
              className={`w-8 h-8 ${
                color == "red" ? "text-black" : "text-white"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Heading */}
      <h3 className="text-3xl font-semibold text-center">{heading}</h3>

      {/* Subheading */}
      <p className="text-base text-center">{subheading}</p>
    </div>
  );
};

export default StatisticsCard;
