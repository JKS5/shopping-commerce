import React from "react";

interface Props {
  text: string;
  price: number;
}

export default function PriceCard({ text, price }: Props) {
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
      <p>{text}</p>
      <p className="font-bold text-brand text-2xl md:text-2xl"> ￦{price}</p>
    </div>
  );
}
