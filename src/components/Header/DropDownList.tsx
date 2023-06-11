import React from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  text: string;
  location?: string;
}

export default function DropDownList({ text, location }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (location) {
      navigate(`/products/${location}`);
    } else {
      navigate(`/`);
    }
  };
  return (
    <p
      onClick={handleClick}
      className="text-base p-4 cursor-pointer hover:text-gray-500"
    >
      {text}
    </p>
  );
}
