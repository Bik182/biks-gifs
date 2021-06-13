import React, { useState } from "react";

const GifImage = (props) => {
  const [displayStill, setDisplay] = useState(true);
  let title = props.title;
  return (
    <div
      onMouseEnter={() => setDisplay(false)}
      onMouseLeave={() => setDisplay(true)}
    >
      {displayStill ? (
        <div className="gif-container">
          <img className="gif-img" alt={props.title} src={props.still} />
          <div className="gif-name">{title.substring(0,title.indexOf("GIF"))}</div>
        </div>
      ) : (
        <div className="gif-container">
          <img className="gif-img" alt={props.title} src={props.gif} />
          
        </div>
      )}
    </div>
  );
};

export default GifImage;
