import React from "react";

import ProductCard from "./ProductCard";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import TopBanner from "./TopBanner";
interface PRODUCTS {
  id: string;
  image: string;
  title: string;
  category: any;
  price: number;
  // key: any;
}
type ProductType = "men" | "women" | "accessory" | "ring" | "shoes";
export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  const { category } = useParams<{ category: ProductType }>();

  const filteredProducts = products?.filter(
    (product: PRODUCTS) => product.category === category
  );
  const finalFilteredProducts =
    filteredProducts && filteredProducts.length > 0
      ? filteredProducts
      : undefined;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error happend</p>}
      <div className="border-b w-full h-36 text-center mt-40 ">
        <TopBanner params={category} />
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-20">
        {products &&
          (finalFilteredProducts || products)!.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
