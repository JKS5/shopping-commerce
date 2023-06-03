import React from "react";

export default function LanguageCard({ language, onClick }: any) {
  return (
    <p
      key={language}
      className=" p-1 hover:bg-gray-100 cursor-pointer"
      onClick={() => onClick(language)}
    >
      {language}
    </p>
  );
}
