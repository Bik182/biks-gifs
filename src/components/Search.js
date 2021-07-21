import React from "react";
//import '../main.scss';
const Search = (props) => {
  return (
    <div className="search-bar-container">
      <button
        onClick={() =>
          props.search(document.getElementById("search-bar").value)
        }
       
        type="submit"
      >
        Search
      </button>
      <input
        type="text"
        id="search-bar"
        placeholder="Search gifs"
        className="input"
        // onClick={props.handleSearchClicked}
        onFocus={props.handleSearchClicked}
        onBlur={props.handleSearchClicked}
       
      />
    </div>
  );
};

export default Search;
