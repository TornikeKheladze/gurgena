import React, { useState } from "react";
import { motion } from "framer-motion";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const sliderVariants = {
    enter: {
      opacity: 0,
      x: "-100%",
    },
    center: {
      opacity: 1,
      x: "0%",
    },
    exit: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div className="border-2 border-black container mx-auto p-4 w-96 h-64">
      <div className="flex items-center justify-center bg-gray-200">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Slider"
          className="slider-image"
          initial="enter"
          animate="center"
          exit="exit"
          variants={sliderVariants}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="slider-controls">
        <button onClick={handlePrev}>&lt; Prev</button>
        <button onClick={handleNext}>Next &gt;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
