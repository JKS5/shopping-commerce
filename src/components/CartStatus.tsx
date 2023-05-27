import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(["carts"], () => getCart(uid));
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-4xl" />
      {products && (
        <p className="w-6 h-6 bg-brand text-center rounded-full absolute -top-1 -right-1 animate fade-in">
          {products.length}
        </p>
      )}
      {/* {products && <p>{products.length}</p>} */}
    </div>
  );
}
