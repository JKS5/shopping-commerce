import React, { useState } from "react";
import { IoEarthOutline } from "react-icons/io5";
import LanguageCard from "./LanguageCard";

export default function Language() {
  const [isHovered, setIsHovered] = useState<any>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<any>("English (US)");
  const languages = [
    "English (US)",
    "English (UK)",
    "汉文(简体)",
    "漢語(繁體)",
    " Español",
    "Français",
    "日本語 ",
    " 한국어",
  ];

  const handleLanguageSelect = (language: any) => {
    setSelectedLanguage(language);
  };
  const handleClickLanguage = (language: any) => {
    handleLanguageSelect(language);
  };
  return (
    <div className="relative text-sm text-sans">
      <div
        className="relative "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center cursor-pointer">
          <IoEarthOutline />
          <p className="w-28 p-2 cursor-pointer ">{selectedLanguage}</p>
        </div>
        <div
          className={`${
            isHovered
              ? "absolute bg-white p-2 border border-gray-300 bottom-full mt-2 "
              : ""
          }`}
        >
          {isHovered &&
            languages.map((language: string, index: any) => (
              <LanguageCard
                key={index}
                language={language}
                onClick={handleClickLanguage}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
