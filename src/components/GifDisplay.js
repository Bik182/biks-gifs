import React, { useState, useRef } from "react";
import GifImage from "./GifImage";
import MoreGifs from "./MoreGifs";
import useWindowDimensions from "./WindowDimensions.js";
const GifDisplay = (props) => {
  const [currIndex, setIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const { windowWidth } = useWindowDimensions();

  const myRef = useRef();
  const gifSize = props.gifSize;
  const marginAndPadding = props.marginAndPadding;
  const gifSizeMultiplier = gifSize + marginAndPadding;
  const length = props.data.length + 1;
  let newWidth =
    Math.floor((windowWidth - marginAndPadding * 2) / gifSizeMultiplier) *
    gifSizeMultiplier;

  const numGifsPerSlide = newWidth / gifSizeMultiplier;

  const numOfSlides = Math.ceil(length / numGifsPerSlide);
  const next = () => {
    if (currIndex < numOfSlides - 1) {
      setIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currIndex > 0) {
      setIndex((prevState) => prevState - 1);
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
  if (currIndex > numOfSlides - 1) {
    setIndex(0);
  }
  return (
    <div
      style={{
        padding: `${marginAndPadding}px`,
        margin: `${marginAndPadding}px`,
        width: `${newWidth}px`,
      }}
      ref={myRef}
      className="display-container"
    >
      {currIndex > 0 && (
        <button onClick={prev} className="left-button">
          <i className="fa fa-chevron-left"></i>
        </button>
      )}
      <div
        className="display-wrapper"
        style={{
          transform: `translateX(-${currIndex * newWidth}px)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {props?.data?.map((obj) => (
          <GifImage
            title={obj.title}
            gif={obj.images.downsized.url}
            still={obj.images.downsized_still.url}
            url={obj.url}
            key={obj.id}
            gifSize={gifSize}
          ></GifImage>
        ))}
        <MoreGifs gifSize={gifSize} url={props.getMore}></MoreGifs>
      </div>

      {currIndex < numOfSlides - 1 && (
        <button onClick={next} className="right-button">
          <i className="fa fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
};

export default GifDisplay;
