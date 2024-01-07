import React, { useState, useEffect } from "react";
import "./Slider.css"; 

const Slider = () => {
  const texts = [
    "Get free delivery on orders over $100",
    "Free Shipping for our gold members",
    "Due to high volume our order may be delayed",
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % texts.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]); 

  return (
    <div className="slider-container">
     
      <p className="flex  h-10 items-center justify-center bg-red-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          {texts[currentSlide]}
        </p>
      
    </div>
  );
};

export default Slider;
