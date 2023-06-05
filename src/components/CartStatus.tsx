import React from "react";

import { RiHandbagFill } from "react-icons/ri";
import useCarts from "../hooks/useCarts";

export default function CartStatus() {
  const {
    cartsQuery: { data: products },
  } = useCarts();
  return (
    <div className="flex items-center">
      <RiHandbagFill className="text-2xl" />
      {products && (
        <p className="w-6 h-6 bg-red-300 text-center rounded-full animate fade-in">
          {products.length}
        </p>
      )}
    </div>
  );
}
