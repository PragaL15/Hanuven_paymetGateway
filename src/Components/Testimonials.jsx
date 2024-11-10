import { useState, useEffect } from "react";
import slider5 from "../Components/Assets/slidern1.jpg";
import slider6 from "../Components/Assets/slidern2.jpg";
import slider7 from "../Components/Assets/slidern3.jpg";

const Testimonials = () => {
  const slides = [slider5, slider6, slider7];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const prevSlide = () => {
    setFade(true); // Start fade-out transition
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setFade(false); // End fade-in transition
    }, 300); // Time to match the fade-out duration
  };

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setFade(false);
    }, 300);
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide); // Cleanup interval on unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen mt-[5px] overflow-hidden">
      {/* Slide container with fade animation */}
      <div
        className={`w-full h-full transition-opacity duration-300 ease-in-out ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${slides[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Left Arrow */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-75 transition-all duration-300"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-75 transition-all duration-300"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Testimonials;
