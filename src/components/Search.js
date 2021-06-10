import React from "react";

const Search = (props) => {
    console.log(props);
  return (
    <div>
      <input
        type="text"
        id="header-search"
        placeholder="Search gifs"
        name="s"
      />
      <button
        onClick={() =>
          props.search(document.getElementById("header-search").value)
        }
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
