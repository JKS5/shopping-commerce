import React, { useState, useEffect } from "react";

type ProductType = "men" | "women" | "accessory" | "ring" | "shoes";
const productTypeTextMap: Record<ProductType, string> = {
  men: "Discover the Latest Trends for Men's Fashion",
  women: "Experience Elegance and Style with Women's Collections",
  accessory: "Complete Your Look with Stylish Accessories",
  ring: "Discover the Perfect Ring to Express Your Timeless Elegance and Style",
  shoes: "Step out in Style with our Trendy Shoe Collection",
};
export default function TopBanner({ params }: { params?: ProductType }) {
  const [changeText, setChangeText] = useState<string>("");
  const [bannerText, setBannerText] = useState<string>("");

  useEffect(() => {
    if (params) {
      setChangeText(params.charAt(0).toUpperCase() + params.slice(1));
      setBannerText(productTypeTextMap[params]);
    }
  }, [params]);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">
        Elevate Your {changeText} Style
      </h1>
      <p>{bannerText}</p>
    </div>
  );
}
