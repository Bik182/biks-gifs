import React from "react";
import GifImage from "./GifImage";
import "./styles/searchStyles.scss";
const SearchResults = (props) => {
 
  return (
    <div className="search-results">
      {props.data.length <= 0 ? (
        <h1 className="search-text"> No Results </h1>
      ) : (
        <>
          <div className="home-logo">
            <h1 className="search-text"> Results </h1>
          </div>
          <div className="container my-5">
            <div className="row">
              {props.data.slice(0, 5).map((obj, key) => {

                return (
                  <div
                    className=" col-md-4 "
                    style={{ width: `auto`, height: `auto` }}
                    key={key}
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
            <div className="btn-wrapper">
              {props.buttonEnabled ? (
                <button
                  id="addButton"
                  type="button"
                  className="btn btn-secondary btn-search-result"
                  onClick={() => props.addToList(props.searchValue)}
                >
                  {" "}
                  <span> </span>
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
              ) : (
                <button
                  id="addButton"
                  type="button"
                  className="btn btn-secondary btn-search-result"
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
        </>
      )}
    </div>
  );
};

export default SearchResults;
