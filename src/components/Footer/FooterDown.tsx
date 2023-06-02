import React, { useState } from "react";
import { IoEarthOutline } from "react-icons/io5";
export default function FooterDown() {
  const [isHovered, setIsHovered] = useState<any>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<any>("English (US)");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLanguageSelect = (language: any) => {
    setSelectedLanguage(language);
  };
  return (
    <section>
      <div className="flex justify-between p-6 ">
        <div className="flex flex-col ">
          <p className="p-1">© 2023 Asadal Wholesale, Inc.</p>
          <div className="flex p-1">
            <p>Terms of Service </p>
            <p>•</p>
            <p>Privacy Policy </p>
            <p>•</p>
            <p>Cookie Policy </p>
            <p>•</p>
            <p>IP Policy </p>
            <p>•</p>
            <p>Sitemap</p>
          </div>
        </div>
        <div className="flex items-center">
          <IoEarthOutline className="" name="" />
          <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p
              className="p-2 cursor-pointer"
              onClick={() => handleLanguageSelect("English (US)")}
            >
              {selectedLanguage}
            </p>
            {isHovered && (
              <div className="absolute bg-white p-2 border border-gray-300 bottom-full mt-2">
                <p
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLanguageSelect("English (UK)")}
                >
                  English (UK)
                </p>
                <p
                  className="p-2 hover:bg-gray-100"
                  onClick={() => handleLanguageSelect("汉文(简体)")}
                >
                  汉文(简体)
                </p>
                <p
                  className="p-2 hover:bg-gray-100"
                  onClick={() => handleLanguageSelect("漢語(繁體)")}
                >
                  漢語(繁體)
                </p>
                <p
                  className="p-2 hover:bg-gray-100"
                  onClick={() => handleLanguageSelect("Español")}
                >
                  Español
                </p>
                <p
                  className="p-2 hover:bg-gray-100"
                  onClick={() => handleLanguageSelect("Français")}
                >
                  Français
                </p>
                <p
                  className="p-2 hover:bg-gray-100"
                  onClick={() => handleLanguageSelect("日本語")}
                >
                  日本語
                </p>
                <p
                  className="p-2 hover:bg-gray-100"
                  onClick={() => handleLanguageSelect("한국어")}
                >
                  한국어
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
