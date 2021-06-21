import React from "react";
import Search from "./Search";
import GifDisplay from "./GifDisplay";
import { fetchGifs, bySearch } from "../redux/fetch/fetchGifs";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RandomGif from "./RandomGif";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetch();
    this.props.search();
  }
  searchMethod = (value) => {
    console.log(value);
  };
 
  render() {
     console.log(this.props.gifs);
    return (
      <div>
        {/* <Search search={this.searchMethod}></Search> */}
          <RandomGif></RandomGif>
        <div className="gradient-container">
        <div className="top-container">
        </div>
      
        <div className="home-background">
         
          <h1 className="display-title">Trending</h1>
          
          <GifDisplay data={this?.props?.gifs?.trendingGifsData}>
          
          </GifDisplay>
          <h1 className="display-title">Pizza</h1>
            <GifDisplay data={this?.props?.gifs?.searchGifsData}>
          
          </GifDisplay>
        </div>
      </div>
        </div>
    );
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    gifs: state.gifSearchReducer,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetch: fetchGifs,
      search: bySearch
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
