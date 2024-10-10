import React from "react";

type TextProps = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  weight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "error"
    | "success"
    | "text"
    | "grey"
    | "black";
  className?: string;
};

const colorMap = {
  grey: "text-grey2",
  text: "text-text",
  primary: "text-pry",
  secondary: "text-gray-600",
  accent: "text-indigo-600",
  error: "text-red-600",
  black: "text-black",
  success: "text-green-600",
};

const Text = ({
  children,
  size = "base",
  weight = "normal",
  color = "text",
  className = "",
}: TextProps) => {
  const sizeClass = `text-${size}`;
  const weightClass = `font-${weight}`;
  const colorClass = colorMap[color];

  return (
    <span className={`${sizeClass} ${weightClass} ${colorClass} ${className}`}>
      {children}
    </span>
  );
};

export default Text;
