import React, { useState } from "react";

const GifImage = (props) => {
    const [imgSource, setSource] = useState(props.still);
  return (
    <img
      onMouseEnter={() => setSource(props.gif)}
      onMouseLeave={() => setSource(props.still)}
      className="gif-img"
      alt={props.title}
      src={imgSource}
    />
  );
};

export default GifImage;
