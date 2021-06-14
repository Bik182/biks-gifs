import React, { useState } from "react";

const GifImage = (props) => {
  const [displayStill, setDisplay] = useState(true);
  let title = props.title;
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.url}
      className="item"
      onMouseEnter={() => setDisplay(false)}
      onMouseLeave={() => setDisplay(true)}
    >
      {displayStill ? (
        <>
          <img className="gif-img" alt={props.title} src={props.still} />
          <div className="gif-name">
            {title.substring(0, title.indexOf("GIF"))}
          </div>
        </>
      ) : (
        <>
          <img className="gif-img" alt={props.title} src={props.gif} />
        </>
      )}
    </a>
  );
};

export default GifImage;
