'use client';
import { useState, useEffect } from "react";
import { firstImage, secondImage, thirdImage } from "@/app/assests/image";

export default function BannerContent() {
  const images = [firstImage, secondImage, thirdImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Infinite looping effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="banner-section flex flex-col lg:flex-row items-center h-screen w-full bg-[#023a15] px-4 lg:px-8 py-12 lg:py-0">
        <div className="banner-text w-full lg:w-2/5 text-left mb-8 lg:mb-0">
          <div className="heading-text flex flex-col justify-between items-start space-y-6 lg:space-y-12">
            <h2 className="text-4xl lg:text-6xl font-thin text-white leading-tight" style={{ fontFamily: 'Lora', fontWeight: 100 }}>
              <span className="block">A whole <i>new</i></span>
              <span className="block"><i> World a whole</i></span>
              <span className="block"><i>new Look</i></span>
            </h2>
            <p className="text-sm lg:text-xl text-white leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla vitae est luctus malesuada. Nulla quis semper erat.
            </p>
            <button className="px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-white text-green-900 font-bold">
              Discover more
            </button>
          </div>
        </div>
        <div className="image-slider w-full lg:w-3/5 flex items-center justify-center">
          <div className="slider-container relative overflow-hidden w-full">
            <div
              className="slider-wrapper flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Show one image at a time on mobile
            >
              {images.concat(images).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="h-[300px] lg:h-[450px] w-full object-cover mx-2 rounded-t-full" // Adjust height for mobile
                  alt={`Slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
