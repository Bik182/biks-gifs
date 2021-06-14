import React from "react";
import GifImage from "./GifImage";

const GifDisplay = (props) => {
  return (
    <>
      {props?.data?.map((obj) => (
        <GifImage
          key={obj.id}
          title={obj.title}
          gif={obj.images.downsized.url}
          still={obj.images.downsized_still.url}
          url={obj.url}
        ></GifImage>
      ))}

       {/* {props.data.length == 10 ? (
        <GifImage
          key={obj.id}
          title={obj.title}
          gif={obj.images.downsized.url}
          still={obj.images.downsized_still.url}
          url={obj.url}
        ></GifImage>
      ) : (
        <div>
          <h2>ERROR</h2>
        </div>
      )}
      */}
    </>
  );
};

export default GifDisplay;
