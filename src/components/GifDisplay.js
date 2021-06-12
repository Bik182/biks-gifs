import React from "react";
import GifImage from "./GifImage";
const GifDisplay = (props) => {
  return (
    <div>
      
      <table className="trending-table">
      <caption className="table-title">Trending Gifs</caption>
        <tbody>
          <tr>
            {props?.data?.map((obj) => (
              <td className="gif-tile" key={obj.id}>
               
                <GifImage
                  title={obj.title}
                  gif={obj.images.downsized.url}
                  still={obj.images.downsized_still.url}
                ></GifImage>
              
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GifDisplay;
