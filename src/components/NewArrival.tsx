import React from "react";

interface NewArrivalProps {
  image: string;
  heading: string;
  text: string;
}

const NewArrival: React.FC<NewArrivalProps> = ({ image, heading, text }) => {
  return (
    <div
      className="relative flex  justify-center h-full bg-black bg-cover bg-center rounded pt-3"
      //   style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex items-center justify-center">
        <img src={image} alt="" />
      </div>
      {/* Content */}
      <div className="absolute bottom-3 left-3 p-4 text-white w-1/2">
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <p className="mt-2">{text}</p>
        <a href="#" className="underline mt-4 inline-block">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default NewArrival;
