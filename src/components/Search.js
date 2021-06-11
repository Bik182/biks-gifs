import React from "react";
//import '../main.scss';
const Search = (props) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        id="search-bar"
        placeholder="Search gifs"
        className="input"
      />
      <div>
        <button
          onClick={() =>
            props.search(document.getElementById("search-bar").value)
          }
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
