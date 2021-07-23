import React, { useState } from "react";
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
      <div className="container my-5">
        <div className="row">
          {props.data.map((obj) => {
            let size = 250 + Math.floor(Math.random() * 250);

            return (
              <div
                className=" col-md-4 "
                style={{ width: `auto`, height: `auto` }}
              >
                <div className="card">
                  <GifImage
                    title={obj.title}
                    gif={obj.images.original.url}
                    still={obj.images.original_still.url}
                    url={obj.url}
                    key={obj.id}
                  ></GifImage>
                </div>
              </div>
            );
          })}
        </div>
        <div class="row">
          <div class="col text-center">
            {props.buttonEnabled ? (
              <button
                id="addButton"
                type="button"
                className="btn btn-secondary"
                onClick={() => props.addToList()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="currentColor"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
              </button>
            ) : (
              <button
                id="addButton"
                type="button"
                className="btn btn-secondary"
                // onClick={() => props.addToList()}
                disabled
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* <div class="card">
        <div class="card-img-top">
          <MoreGifs
            gifSize={250}
            url={`https://giphy.com/search/${props.searchValue}`}
          ></MoreGifs>
        </div>
      </div> */}
    </div>
  );
};

export default SearchResults;
