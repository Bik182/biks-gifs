import React, { useState } from "react";
import GifImage from "./GifImage";
import MoreGifs from "./MoreGifs";
const GifDisplay = (props) => {
  const { children } = props;
  const [currIndex, setIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const length = props.data.length;

  const next = () => {
    console.log(currIndex);
    if (currIndex < length / 4 - 1) {
      setIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currIndex > 0) {
      setIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="display-container">
      {currIndex > 0 && (
        <button onClick={prev} className="left-button">
          <i className="fa fa-chevron-left"></i>
        </button>
      )}
      <div
        className="display-wrapper"
        style={{ transform: `translateX(-${currIndex * 1080}px)` }}
      >
        {props?.data?.map((obj) => (
          <GifImage
            title={obj.title}
            gif={obj.images.downsized.url}
            still={obj.images.downsized_still.url}
            url={obj.url}
            key={obj.id}
          ></GifImage>
        ))}
        <MoreGifs url={props.getMore}></MoreGifs>
      </div>

      {currIndex < length / 4 - 1 && (
        <button onClick={next} className="right-button">
          <i className="fa fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
};

export default GifDisplay;
