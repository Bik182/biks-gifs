import React, { useState } from "react";
import "./styles/gif.scss";
import "./styles/vote.scss";
import "./styles/searchStyles.scss";
const GifImage = (props) => {
  const [displayStill, setDisplay] = useState(true);
  const title = props.title;
  const size = props.gifSize;
  return (
    <div
      onMouseEnter={() => setDisplay(false)}
      onMouseLeave={() => setDisplay(true)}
      className="display-item"
    >
      {displayStill ? (
        <>
          <img
            style={{ width: `${size}px`, height: `${size}px` }}
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
          <a target="_blank" rel="noopener noreferrer" href={props.url}>
            <img
              style={{ width: `${size}px`, height: `${size}px` }}
              className="gif-img"
              alt={props.title}
              src={props.gif}
            />
          </a>
          <div className="vote-container ">
            
              <span onClick={() => {navigator.clipboard.writeText(props.shareUrl)}} className="share-text pulse">Share</span>
           
          </div>
        </>
      )}
    </div>
  );
};

export default GifImage;
