import React, { useState } from "react";
import more from "../assets/more.gif";
import still from "../assets/more-still.png";

const MoreGifs = (props) => {
  const [displayStill, setDisplay] = useState(true);
 
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
          <img className="gif-img" alt={"click for more gifs"} src={still} />
          <div className="gif-name">
            Click for more gifs!
          </div>
        </>
      ) : (
        <>
          <img className="gif-img" alt={"click for more gifs"} src={more} />
        </>
      )}
    </a>
  );
};

export default MoreGifs;
