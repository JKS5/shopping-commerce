import React, { useState } from "react";

export default function NewProduct() {
  const [files, setFiles] = useState<any>();
  const [product, setProducts] = useState<any>();
  const onChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFiles(files);
      return;
    }
    setProducts(() => ({ ...product, [name]: value }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    //cloudinary로 product를 전송
  };
  return (
    <section>
      <form onSubmit={onSubmit}>
        {files && <img src={URL.createObjectURL(files[0])} alt="preview" />}
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={onChange}
          required
        />
        <button>click it</button>
      </form>
    </section>
  );
}
