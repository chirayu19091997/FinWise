import React from "react";

interface TextHoverProps {
  text: string;
  className?: string;
}
const TextHover = ({ text, className }: TextHoverProps) => {
  return (
    <div
      className={`cursor-pointer transition-all duration-200 text-base relative one ${className}`}
    >
      <span>{text}</span>
      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primaryColor"></span>
    </div>
  );
};

export default TextHover;
