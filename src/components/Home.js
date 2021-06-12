import React from "react";
import Search from "./Search";
import GifDisplay from "./GifDisplay";
import fetchGifs from "../redux/fetch/fetchGifs";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
     this.props.fetchGifs();
   
  }
  searchMethod = (value) => {
    console.log(value);
  };

  render() {
   
    return (
      <div>
        <Search search={this.searchMethod}></Search>
        <body className="homeBackground">
          <GifDisplay data={this.props.gifs.gifsData}></GifDisplay>
        </body>
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
      fetchGifs: fetchGifs,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
