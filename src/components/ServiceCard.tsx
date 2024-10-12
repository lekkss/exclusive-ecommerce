interface ServiceCardProps {
  icon: string;
  heading: string;
  subheading: string;
}

const ServiceCard = ({ icon, heading, subheading }: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-2 items-center p-4 bg-white ">
      {/* Icon Container */}
      <div className="relative flex items-center justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
          <div className="w-12 h-12 p-2 rounded-full bg-black flex items-center justify-center">
            <img src={icon} alt="" />
          </div>
        </div>
      </div>

      {/* Heading */}
      <h3 className="text-xl font-semibold text-center">{heading}</h3>

      {/* Subheading */}
      <p className="text-gray-600 text-sm text-center">{subheading}</p>
    </div>
  );
};

export default ServiceCard;
