import React, { useState } from "react";

const GifImage = (props) => {
  const [displayStill, setDisplay] = useState(true);
  let title = props.title;
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
