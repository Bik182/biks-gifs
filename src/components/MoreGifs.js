import React, { useState } from "react";

import "./styles/searchStyles.scss";
import "./styles/gif.scss";

const MoreGifs = (props) => {
  const [displayStill, setDisplay] = useState(true);
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
            style={{ width: `${size}px`, height: `${size}px` }}
            className="gif-img"
            alt={"click for more gifs"}
            src={
              "https://media4.giphy.com/media/1jXGsHY2EKdL27mEMd/giphy.gif?cid=790b7611b6cb74e8e8a57a4ad1fa49d27997ce1e983bcff2&rid=giphy.gif&ct=g"
            }
          />
          <div className="gif-name">Click for more gifs!</div>
        </>
      ) : (
        <>
          <img
            style={{ width: `${size}px`, height: `${size}px` }}
            className="gif-img"
            alt={"click for more gifs"}
            src={
              "https://media0.giphy.com/media/kObl0anlOaYu3br5Y6/giphy.gif?cid=790b761188cf67f4231cebe0d5f71b20f9a4e035af774921&rid=giphy.gif&ct=g"
            }
          />
        </>
      )}
    </a>
  );
};

export default MoreGifs;
