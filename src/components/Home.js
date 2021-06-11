import React from "react";
import Search from "./Search";
import GifDisplay from "./GifDisplay";
import fetchGifs from "../redux/fetch/FetchGifs";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gifsData: [] };
  }
  componentDidMount() {
    let data = fetchGifs();
    this.setState({
      gifsData: data,
    });
  }
  searchMethod = (value) => {
    console.log(value);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Search search={this.searchMethod}></Search>
        <body className="homeBackground">
          <GifDisplay gifsData={this.state.gifsData}></GifDisplay>
        </body>
      </div>
    );
  }
}
export default Home;
