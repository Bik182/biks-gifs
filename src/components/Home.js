import React from "react";
import Search from "./Search";
import GifDisplay from "./GifDisplay";
import { fetchGifs, bySearch } from "../redux/fetch/fetchGifs";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RandomGif from "./RandomGif";
import Logo from "./Logo";
import logoPic from "../assets/logo-red.png";
import { BrowserView, MobileView } from "react-device-detect";
import "./mobile.css";
import giphyLogo from "../assets/Poweredby_640px-Black_VertLogo.png";
class Home extends React.Component {
  componentDidMount() {
    this.props.fetch();
    this.props.search();
  }
  searchMethod = (value) => {
    console.log(value);
  };

  render() {
    return (
      <div className="main-container">
        <BrowserView>
          {/* <Search search={this.searchMethod}></Search> */}
          <RandomGif></RandomGif>
          <div className="gradient-container">
            <div className="top-container">
              <Logo multiplier={20} source={logoPic}></Logo>
              <Logo multiplier={10} source={giphyLogo}></Logo>
            </div>

            <div className="home-background">
              <h1 className="display-title">Trending</h1>

              <GifDisplay
                gifSize={250}
                marginAndPadding={20}
                getMore={"https://giphy.com/trending-gifs"}
                pending={this?.props?.gifs?.fetchTrendingGifPending}
                data={this?.props?.gifs?.trendingGifsData}
              ></GifDisplay>
              <h1 className="display-title">Pizza</h1>
              <GifDisplay
                gifSize={250}
                marginAndPadding={20}
                getMore={"https://giphy.com/search/pizza"}
                pending={this?.props?.gifs?.fetchGifSearchPending}
                data={this?.props?.gifs?.searchGifsData}
              ></GifDisplay>
            </div>
          </div>
        </BrowserView>
        <MobileView>
        <div className="mobile-main-container">
          <RandomGif mobile="mobile-random-container"></RandomGif>
          <div className="mobile-gradient-container">
            <Logo multiplier={10} source={logoPic}></Logo>
            <Logo multiplier={5} source={giphyLogo}></Logo>
          </div>
          <div className="mobile-home-background">
            <GifDisplay
              gifSize={250}
              marginAndPadding={20}
              getMore={"https://giphy.com/trending-gifs"}
              pending={this?.props?.gifs?.fetchTrendingGifPending}
              data={this?.props?.gifs?.trendingGifsData}
            ></GifDisplay>
          </div>
          </div>
        </MobileView>
      </div>
    );
  }
}

// Map State To Props (Redux Store Passses State To Component)
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
      search: bySearch,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
