import React from "react";
import { Icon } from "@iconify/react";

type InputButtonProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
  icon?: string;
  className?: string;
};

const InputButton = ({
  placeholder = "Enter your email",
  value,
  onChange,
  onIconClick,
  icon = "akar-icons:send",
  className = "",
}: InputButtonProps) => {
  return (
    <div
      className={`flex items-center justify-between w-full border border-white p-3 rounded ${className}`}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="text-grey border-none bg-transparent outline-none flex-grow text-sm"
        placeholder={placeholder}
      />
      <Icon
        icon={icon}
        className="w-6 h-6 cursor-pointer"
        onClick={onIconClick}
      />
    </div>
  );
};

export default InputButton;
