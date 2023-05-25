import React, { useState } from "react";
import { addNewProduct } from "../api/firebase";
import { uploadImage } from "../api/uploader";
import Button from "../components/ui/Button";

export default function NewProduct() {
  const [file, setFiles] = useState<any>();
  const [product, setProduct] = useState<any>();
  const [success, setSuccess] = useState<any>();
  const [isUpLoading, setIsUpLoading] = useState<any>();
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
    setIsUpLoading(true);
    uploadImage(file).then((url) => {
      console.log(url);
      addNewProduct(product, url)
        .then(() => {
          setSuccess("성공적으로 추가 되었습니다.");
          setTimeout(() => setSuccess(null), 4000);
        })
        .finally(() => setIsUpLoading(false));
    });
  };
  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">제품 등록</h2>
      {success && <p className="my-2">{success}</p>}
      <form className="flex flex-col px-12" onSubmit={onSubmit}>
        {file && (
          <img
            className="w-96 mx-auto mb-2"
            src={URL.createObjectURL(file)}
            alt="preview"
          />
        )}
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
        <Button
          text={isUpLoading ? "업로드중..." : "제품 등록하기"}
          disabled={isUpLoading}
        />
      </form>
    </section>
  );
}
