import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  product: {
    id: string;
    image: string;
    title: string;
    category: any;
    price: number;
  };
  // key: any;
}
export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}: // key,
Props) {
  const navigate = useNavigate();
  const formattedPrice = price.toLocaleString();

  return (
    <li
      onClick={() => {
        navigate(`/products/detail/${id}`, { state: { product: product } });
      }}
      className=" overflow-hidden cursor-pointer transition-all hover:scale-105 "
    >
      <img className="w-full  hover:shadow-lg" src={image} alt={title} />
      <div className="mt-2 text-lg ">
        <p className="text-sm text-gray-400">{category}</p>
        <h3 className="truncate">{title}</h3>
        <p>{`₩${formattedPrice}`}</p>
      </div>
    </li>
  );
}
