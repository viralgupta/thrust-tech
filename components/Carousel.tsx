"use client";

import { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";

interface props {
  photoArray: string[];
}

const Carousel = ({ photoArray }: props) => {
  useEffect(() => {
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    const prevButton = document.querySelector("[data-carousel-prev]");
    const nextButton = document.querySelector("[data-carousel-next]");
    prevButton?.removeAttribute("disabled");
    nextButton?.removeAttribute("disabled");

    let activeIndex = 0;

    nextButton?.addEventListener("click", () => {
      carouselItems[activeIndex].removeAttribute("data-carousel-item");
      carouselItems[activeIndex].classList.add("hidden");
      activeIndex =
        (activeIndex - 1 + carouselItems.length) % carouselItems.length;
      carouselItems[activeIndex].setAttribute("data-carousel-item", "active");
      carouselItems[activeIndex].classList.remove("hidden");
    });

    prevButton?.addEventListener("click", () => {
      carouselItems[activeIndex].removeAttribute("data-carousel-item");
      carouselItems[activeIndex].classList.add("hidden");
      activeIndex = (activeIndex + 1) % carouselItems.length;
      carouselItems[activeIndex].setAttribute("data-carousel-item", "active");
      carouselItems[activeIndex].classList.remove("hidden");
    });
  }, [photoArray]);

  return (
    <div
      id="controls-carousel"
      className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen p-2 rounded-lg bg-black"
      data-carousel="slide"
    >
      <div className="relative overflow-hidden rounded-lg h-full">
        <div className="duration-700 ease-in-out" data-carousel-item="active">
            {!photoArray[0].endsWith("mp4") && <img
              src={photoArray[0]}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />}
            {photoArray[0].endsWith("mp4") && <VideoPlayer key={0} location={photoArray[0]}/>}
          </div>
        {photoArray.map((photo, index) => {
            if (index !== 0) {
              return (
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                  key={index}
                >
                  {!photo.endsWith("mp4") && <img
                    src={photo}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />}
                  {photo.endsWith("mp4") && <VideoPlayer location={photo}/>}
                </div>
              );
            } else {
              return null; // Skip the first element
            }
          })}
      </div>
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 left-0 z-[2] flex items-center justify-center px-4 cursor-pointer group focus:outline-none disabled:hidden"
        data-carousel-prev
        disabled={true}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-0 z-[2] flex items-center justify-center px-4 cursor-pointer group focus:outline-none disabled:hidden"
        data-carousel-next
        disabled={true}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
