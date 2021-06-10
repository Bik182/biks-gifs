import React from "react";
import Search from "./Search";
class Home extends React.Component {
  searchMethod = (value) => {
    console.log(value);
  };
  render() {
    return (
      <div>
        <Search search={this.searchMethod}></Search>
        <body className="homeBackground">
          <h1>You are home! </h1>
        </body>
      </div>
    );
  }
}
export default Home;
