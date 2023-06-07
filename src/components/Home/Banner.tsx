import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ChangeUiPic from "./ChangeUiPic";
export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 1;
    const newIndex = isFirstSlide ? 3 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === 3;
    const nextIndex = isLastSlide ? 1 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };
  return (
    <div>
      <section className="h-96 bg-yellow-900 relative">
        <div className="w-full h-full bg-cover bg-banner opacity-80" />
        <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
          <h2 className="text-6xl">Shop With US</h2>
          <p className="text-2xl">Best Products, High Quality</p>
        </div>
      </section>

      <div className="relative max-w-[1400px]  h-[780px] m-auto py-16 px-4 ">
        <div
          className={`w-full h-full bg-contain bg-center duration-500 bg-banner${currentIndex}`}
        ></div>
        <div className="absolute bottom-10 right-10 flex text-6xl">
          <IoIosArrowRoundBack onClick={prevSlide} className="cursor-pointer" />
          <IoIosArrowRoundForward
            onClick={nextSlide}
            className="cursor-pointer"
          />
        </div>
        <div>
          <ChangeUiPic onClick={() => setCurrentIndex(1)} />
          <ChangeUiPic onClick={() => setCurrentIndex(2)} />
          <ChangeUiPic onClick={() => setCurrentIndex(3)} />
        </div>
      </div>
    </div>
  );
}
