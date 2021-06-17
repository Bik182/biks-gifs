import React from "react";
import Search from "./Search";
import GifCarousel from "./GifCarousel";
import { fetchGifs } from "../redux/fetch/fetchGifs";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import GifItem from "./GifItem";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }
  searchMethod = (value) => {
    console.log(value);
  };

  render() {
    return (
      <>
        {/* <Search search={this.searchMethod}></Search> */}
        <div className="container">
          <GifCarousel>
          
            {this.props?.gifs.gifsData?.map((obj) => (
              <GifItem
                key={obj.id}
                title={obj.title}
                gif={obj.images.downsized.url}
                still={obj.images.downsized_still.url}
                url={obj.url}
              >
              
              </GifItem>
            ))}
              
          </GifCarousel>
         
        </div>
      </>
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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
