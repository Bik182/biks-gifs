import React, { useState } from "react";

const GifImageSearch = (props) => {
  const [displayStill, setDisplay] = useState(true);
  const title = props.title;
  const size = props.gifSize;
  return (
    <a
      onMouseEnter={() => setDisplay(false)}
      onMouseLeave={() => setDisplay(true)}
      target="_blank"
      className="display-item"
      rel="noopener noreferrer"
      href={props.url}
    >
      {displayStill ? (
        <>
          <img
            style={{ width: `auto`, height: `auto` }}
            className="gif-img"
            alt={props.title}
            src={props.still}
          />
          <div className="gif-name">
            {title.substring(0, title.indexOf("GIF"))}
          </div>
        </>
      ) : (
        <>
          <img
            style={{ width: `${size}px`, height: `${size}px` }}
            className="gif-img"
            alt={props.title}
            src={props.gif}
          />
        </>
      )}
    </a>
  );
};

export default GifImageSearch;
