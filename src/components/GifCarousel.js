import React, { useEffect, useState } from "react";
import GifItem from "./GifItem";
import "./carousel.css";
const GifCarousel = (props) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(8);
  const [showArrows, setShowArrows] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);
  useEffect(() => {
    setLength(8);
  }, [children]);
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
      className="carousel-container"
    >
      <div
        className="carousel-content"
        // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>

      <button
        onClick={() => console.log("left")}
        className="left-button"
      ></button>
      <button
        className="right-button"
        onClick={() => console.log("right")}
      ></button>
    </div>
  );
};

export default GifCarousel;
