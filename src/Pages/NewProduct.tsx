import React, { useState } from "react";
import Button from "../components/ui/Button";

export default function NewProduct() {
  const [files, setFiles] = useState<any>();
  const [product, setProduct] = useState<any>();
  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFiles(files && files[0]);
      return;
    }
    setProduct((product: any) => ({ ...product, [name]: value }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    //cloudinary로 product를 전송
  };
  return (
    <section>
      <form onSubmit={onSubmit}>
        {files && <img src={URL.createObjectURL(files)} alt="preview" />}
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          value={product?.title ?? ""}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product?.price ?? ""}
          placeholder="가격"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          value={product?.description ?? ""}
          placeholder="제품 설명"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="options"
          value={product?.options ?? ""}
          placeholder="옵션들(콤마(,)로 구분)"
          onChange={handleChange}
          required
        />
        <Button text={"제품 등록 하기"} onClick={undefined} />
      </form>
    </section>
  );
}
