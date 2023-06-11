import React from "react";

import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";
interface PRODUCTS {
  id: string;
  image: string;
  title: string;
  category: any;
  price: number;
  // key: any;
}
export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  const params = useParams();

  const filteredProducts = products?.filter(
    (product: PRODUCTS) => product.category === params.category
  );
  const finalFilteredProducts =
    filteredProducts && filteredProducts.length > 0
      ? filteredProducts
      : undefined;
  console.log(finalFilteredProducts);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error happend</p>}
      <div className="border-b w-full h-36 text-center mt-40 ">
        <h1 className="text-2xl font-semibold mb-4">Elevate Your Style </h1>
        <p>Casual linen. Comfort Meets Elegance!</p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-20">
        {/* {products &&
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
        {products &&
          (finalFilteredProducts || products)!.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
