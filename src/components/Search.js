import React, { useEffect } from "react";
import "./styles/searchStyles.scss";
const Search = (props) => {
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      document.getElementById("search-submit").click();
      document.getElementById("search-bar").blur();
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  });
  return (
    <div className="search-bar-container width:10px">
      <button
        onClick={() =>
          props.search(document.getElementById("search-bar").value)
        }
        id="search-submit"
        type="submit"
        style={{display:"none"}}
      >
        Search
      </button>
      <input
        type="text"
        id="search-bar"
        placeholder="Search gifs"
        className="input"
       
        onFocus={props.handleSearchClicked}
        onBlur={props.handleSearchClicked}
        onChange={() =>
          props.handleSearchEmpty(
            document.getElementById("search-bar").value.length
          )
        }
      />
    </div>
  );
};

export default Search;
