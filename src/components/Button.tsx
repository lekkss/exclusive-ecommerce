import React from "react";
import { Icon } from "@iconify/react";

type ButtonProps = {
  text: string;
  color?: string;
  textColor?: string;
  icon?: string;
  padding?: "sm" | "md" | "lg"; // Predefined padding sizes
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  color = "bg-pry",
  textColor = "text-white",
  icon,
  padding = "md", // Default padding
  iconPosition = "left",
  fullWidth = false,
  onClick,
  className = "",
}) => {
  // Define padding sizes
  const paddingClasses = {
    sm: "px-4",
    md: "px-6",
    lg: "px-10",
  };

  return (
    <button
      className={`
        ${color} ${textColor} ${paddingClasses[padding]} ${
        fullWidth ? "w-full" : "w-fit"
      } 
        outline-none rounded h-14 flex items-center justify-center text-sm md:text-base font-normal
        ${className}
      `}
      onClick={onClick}
    >
      {/* Conditionally render icon before or after text */}
      {icon && iconPosition === "left" && (
        <Icon icon={icon} className="w-6 h-6 mr-2" />
      )}
      {text}
      {icon && iconPosition === "right" && (
        <Icon icon={icon} className="w-6 h-6 ml-2" />
      )}
    </button>
  );
};

export default Button;
