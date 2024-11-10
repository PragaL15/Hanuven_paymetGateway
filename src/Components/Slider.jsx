import { useState, useEffect } from 'react';
import slider1 from '../Components/Assets/slider1.jpg';
import slider2 from '../Components/Assets/slider2.jpg';
import slider3 from '../Components/Assets/slider3.jpg';
import slider4 from '../Components/Assets/slider4.jpg';

function DualSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = [slider1, slider2, slider3, slider4];

  const getNextIndex = (index) => (index + 1) % slides.length;

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }
  };

  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative flex h-[calc(100vh-88px)] overflow-hidden">
      {/* Left Arrow */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-75 transition-all duration-300"
        onClick={prev}
      >
        &#10094;
      </button>

      {/* Left Image */}
      <div className="w-1/2 h-full overflow-hidden">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={`left-${index}`}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="min-w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-1/2 h-full overflow-hidden">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${getNextIndex(currentIndex) * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={`right-${index}`}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="min-w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-75 transition-all duration-300"
        onClick={next}
      >
        &#10095;
      </button>
    </div>
  );
}

export default DualSlider;