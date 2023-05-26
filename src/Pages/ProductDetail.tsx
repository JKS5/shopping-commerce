import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  // const location = useLocation();
  const handleSelect = (e: any) => {
    setSelected(e.target.value);
  };
  const [selected, setSelected] = useState<any>(options && options[0]);

  return (
    <section>
      <p>{category}</p>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>옵션</p>
        <select onChange={handleSelect} value={selected}>
          {options &&
            options.map((option: string, index: number) => (
              <option key={index}>{option}</option>
            ))}
        </select>
      </div>
    </section>
  );
}
