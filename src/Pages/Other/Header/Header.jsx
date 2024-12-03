import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: "./src/assets/SlideShowImgs/mysuru.jpg", text: "Mysuru Palace" },
    { src: "./src/assets/SlideShowImgs/Hotel taj.jpg", text: "Hotel Taj" },
    { src: "./src/assets/SlideShowImgs/Mumbai.jpg", text: "Mumbai" },
    { src: "./src/assets/SlideShowImgs/nature.jpg", text: "Konkan" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="relative w-full h-[30rem] sm:h-[40rem] flex flex-col p-0 m-0 items-center justify-center ">
      {/* Slideshow Container with Bold Border */}
      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.text}
              className="w-full h-full object-cover" // Ensures the image fully covers the container
            />
          </div>
        ))}
      </div>

      {/* Header Text Over Slideshow */}
      <div className="absolute bottom-11 left-0 right-0 z-20 text-center bg-opacity-50 bg-black py-4 px-6 w-full">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          {slides[currentSlide].text}
        </h2>
        <p className="text-sm sm:text-xl text-gray-200 mt-2">
          Beauty of India... Call us right now!!!
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mb-11 z-11 space-x-2 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              index === currentSlide
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
