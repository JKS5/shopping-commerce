import React from "react";

export default function DropDownList({ text }: { text: string }) {
  return (
    <p className="text-base p-4 cursor-pointer hover:text-gray-500">{text}</p>
  );
}
