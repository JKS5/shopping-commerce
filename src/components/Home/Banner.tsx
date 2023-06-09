import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ChangeUiPic from "./ChangeUiPic";
export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setPreviousIndex(currentIndex);
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setPreviousIndex(currentIndex);
    setCurrentIndex(nextIndex);
  };
  const slides = [
    { backgroundImage: `url('/images/Women/fashion_banner_Edited.jpg')` },
    { backgroundImage: `url('/images/Men/man_With_Sunglassess_Edited.jpg')` },
    {
      backgroundImage: `url('/images/Men/man_redSuit_Rings_Bag_Italy_Edited.jpg')`,
    },
  ];

  const handleSlideClick = (index: number) => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
  };
  return (
    <section className="">
      <div
        key={currentIndex}
        className="relative max-w-[1920px]  h-[1080px] m-auto py-16 px-4 "
      >
        <div
          // This forces React to re-render the element and apply the animation class whenever currentIndex changes.
          style={{
            backgroundImage: `${slides[currentIndex].backgroundImage}`,
          }}
          className={`w-4/6 h-full bg-cover duration-700 animate-fade-in `}
        />
        <div className="absolute bottom-1/4 right-8 flex text-6xl">
          <div className="px-2">
            <IoIosArrowRoundBack
              onClick={prevSlide}
              className="cursor-pointer "
            />
          </div>
          <div className="px-2">
            <IoIosArrowRoundForward
              onClick={nextSlide}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div className="absolute top-96 right-4">
            <p className="animate-text-fade-in">
              <div
                className={`flex w-full text-center ${
                  currentIndex === 2 ? "text-gray-500" : ""
                }`}
              >
                <p
                  className={`px-2 font-bold  ${
                    currentIndex === 2 ? "text-gray-600" : ""
                  }`}
                >
                  {currentIndex < 2 ? "New" : " Pitti Immagine"}
                </p>
                <p className=" ">CLASSIC</p>
              </div>{" "}
            </p>
            <h2 className="text-9xl font-semibold animate-text-fade-in">
              {currentIndex < 2 ? (
                <>
                  New York <br /> Fashion Week
                </>
              ) : (
                <>
                  Italy <br /> Florance
                </>
              )}
            </h2>
            <br />
            <div
              key={currentIndex}
              className="flex px-3  transition-all animate-btn-fade-in"
            >
              <button className="bg-black text-white w-36 h-12   ">
                Shop Now
              </button>
              <div className="bg-black mx-[2px] w-[3px] h-12"></div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-end absolute right-3 top-[400px]   ">
          <ChangeUiPic
            onClick={() => handleSlideClick(0)}
            // key로 설정시 React의 reserved key와 conflick됨.
            slidekey={0}
            currentIndex={currentIndex}
            previousIndex={previousIndex}
          />
          <ChangeUiPic
            onClick={() => handleSlideClick(1)}
            slidekey={1}
            currentIndex={currentIndex}
            previousIndex={previousIndex}
          />
          <ChangeUiPic
            onClick={() => handleSlideClick(2)}
            slidekey={2}
            currentIndex={currentIndex}
            previousIndex={previousIndex}
          />
        </div>
      </div>
    </section>
  );
}
