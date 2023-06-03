import React from "react";
import Products from "../components/Products";
import Banner from "../components/Banner";

export default function Home() {
  // 배너 사진  넘기는거 구현
  return (
    <section>
      <Banner />
      <Products />
    </section>
  );
}
