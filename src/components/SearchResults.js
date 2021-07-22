import React, {useState} from "react";
import GifDisplay from "./GifDisplay";
import MoreGifs from "./MoreGifs";

import moreGif from "../assets/more.gif";
import GifImage from "./GifImage";

import searchStyle from "./searchStyles.css";
const SearchResults = (props) => {
  const fakeData = [
    {
      title: "title",
      gif: moreGif,
      still: moreGif,
      key: 1,
      url: "www.google.com",
    },
    {
      title: "title",
      gif: moreGif,
      still: moreGif,
      key: 2,
      url: "www.google.com",
    },
    {
      title: "title",
      gif: moreGif,
      still: moreGif,
      key: 3,
      url: "www.google.com",
    },
    {
      title: "title",
      gif: moreGif,
      still: moreGif,
      key: 4,
      url: "www.google.com",
    },
    {
      title: "title",
      gif: moreGif,
      still: moreGif,
      key: 5,
      url: "www.google.com",
    },
    {
      title: "title",
      gif: moreGif,
      still: moreGif,
      key: 6,
      url: "www.google.com",
    },
  ];
  const [displayStill, setDisplay] = useState(true);
  return (
    <div className="search-results">
      {props.data.map((obj) => (
       <GifImage
            title={obj.title}
            gif={obj.images.downsized.url}
            still={obj.images.downsized_still.url}
            url={obj.url}
            key={obj.id}
            gifSize={250}
          ></GifImage>
      ))}
       <MoreGifs gifSize={250} url={`https://giphy.com/search/${props.searchValue}`}></MoreGifs>
    </div>
  );
};

export default SearchResults;
