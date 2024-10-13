import React, { ChangeEvent } from "react";

type InputFieldProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder = "Enter text...",
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 bg-[#F5F5F5] rounded focus:outline-none h-12 flex items-center"
    />
  );
};

export default InputField;
