import React from "react";

const GifDisplay = (props) => {
    console.log(props.gifsData);
  return (
    <div>
      <h2>Gifs</h2>
      {/* {props.gifsData.map((obj) => (
        <div>
          <p>{obj.title}</p>
          <img alt={obj.title} src={obj.images.downsized.url} />
        </div>
      ))} */}
    </div>
  );
};

export default GifDisplay;
