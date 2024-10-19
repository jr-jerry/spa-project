'use client';
import { useState, useEffect } from "react";
import { featureImage1, featureImage2, featureImage3 } from '@/app/assests/image';

export default function FeatureProduct() {
  const images = [featureImage1, featureImage2, featureImage3];
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
    <div className="feature-product py-16 md:py-32 h-auto bg-[#023a15]">
      <div className="feature-container flex flex-col md:flex-row">
       
        <div className="feature-description flex flex-col justify-center items-start md:basis-[30%] px-4 md:px-8 text-white">
          <p className="text-4xl md:text-6xl font-thin">Feature Product</p>
          <p className="text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
          <div>
            <button className="mt-4 px-6 py-3 rounded-full bg-white text-green-900 font-bold">
              View
            </button>
          </div>
        </div>

        {/* Image slider */}
        <div className="image-slider flex justify-center items-center md:basis-[70%]">
          <div className="slider-container relative overflow-hidden w-full">
            <div
              className="slider-wrapper flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Adjusted to show one image at a time
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="h-[250px] w-full object-cover md:h-[350px] md:w-[350px] mx-2 rounded-t-full"
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
      </div>
    </div>
  );
}
