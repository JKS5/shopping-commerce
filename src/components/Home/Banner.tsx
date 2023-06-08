import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ChangeUiPic from "./ChangeUiPic";
export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };
  const slides = [
    { backgroundImage: `url('/images/Women/fashion_banner_Edited.jpg')` },
    { backgroundImage: `url('/images/Men/man_With_Sunglassess_Edited.jpg')` },
    {
      backgroundImage: `url('/images/Men/man_redSuit_Rings_Bag_Italy_Edited.jpg')`,
    },
  ];
  return (
    <div>
      {/* <section className="h-96 bg-yellow-900 relative">
        <div className="w-full h-full bg-cover bg-banner1 opacity-80" />
        <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
          <h2 className="text-6xl">Shop With US</h2>
          <p className="text-2xl">Best Products, High Quality</p>
        </div>
      </section> */}

      <div className="relative max-w-[1920px]  h-[1080px] m-auto py-16 px-4 ">
        <div
          style={{
            backgroundImage: `${slides[currentIndex].backgroundImage}`,
          }}
          className={`bg-banner${currentIndex} w-full h-full bg-cover bg-center duration-500 `}
        />
        <div className="absolute bottom-10 right-10 flex text-6xl">
          <IoIosArrowRoundBack onClick={prevSlide} className="cursor-pointer" />
          <IoIosArrowRoundForward
            onClick={nextSlide}
            className="cursor-pointer"
          />
        </div>

        <div>
          <ChangeUiPic onClick={() => setCurrentIndex(0)} />
          <ChangeUiPic onClick={() => setCurrentIndex(1)} />
          <ChangeUiPic onClick={() => setCurrentIndex(2)} />
        </div>
      </div>
    </div>
  );
}
