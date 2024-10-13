import React, { ChangeEvent } from "react";

type TextAreaFieldProps = {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  row?: number;
};

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  placeholder = "Enter text...",
  value,
  onChange,
  row = 5,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 bg-[#F5F5F5] rounded focus:outline-none"
      rows={row}
    />
  );
};

export default TextAreaField;
