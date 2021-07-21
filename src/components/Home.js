import React from "react";
import Search from "./Search";
import GifDisplay from "./GifDisplay";
import SearchResults from "./SearchResults";
import { fetchGifs, bySearch, getRandomGif } from "../redux/fetch/fetchGifs";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RandomGif from "./RandomGif";
import Logo from "./Logo";
import logoPic from "../assets/logo-red.png";
import useWindowDimensions from "./WindowDimensions.js";
import moreGif from "../assets/more.gif";
import giphyLogo from "../assets/Poweredby_640px-Black_VertLogo.png";
const fakeData = [
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
  {
    title: "title",
    gif: moreGif,
    still: moreGif,
    key: 1,
    url: "www.google.com",
  },
];
const style = {
  backgroundImage:
    "url(" +
    "https://media4.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif?cid=ecf05e47ukeeoewe3120bohcs5fcic0ryzs6e3tifymg1qlf&rid=giphy.gif&ct=g" +
    ")",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "500px",
  width: "500px",
};
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    searchText: "",
    searchFocus: false,
    userSearched: false,
    userAdded: false,
    width: 0,
    height: 0,
    defaultRandomGif:
      "https://media4.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif?cid=ecf05e47ukeeoewe3120bohcs5fcic0ryzs6e3tifymg1qlf&rid=giphy.gif&ct=g",
  };

  componentDidMount() {
    // this.props.fetch();
    // this.props.search();

    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  searchMethod = (value) => {
    if (value !== "") {
      this.setState({
        searchText: value,
        userSearched: true,
      });
      this.props.search(value);
    }
  };
  randomMethod = () => {
    this.props.fetchRandom();
  };
  handleSearchClicked = () => {
    this.setState({
      searchFocus: !this.state.searchFocus,
    });
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    console.log("height " + this.state.height);

    return (
      <>
        <div className="top-container ">
          <Logo multiplier={20} source={logoPic}></Logo>
          <Logo multiplier={10} source={giphyLogo}></Logo>
        </div>
        <div className="main-container">
          <div className="search-container">
            <Search
              handleSearchClicked={this.handleSearchClicked}
              search={this.searchMethod}
            ></Search>
          </div>
          <div
            className={
              this.state.searchFocus ? "home-container-hide" : "home-container"
            }
          >
            {this.state.userSearched ? (
              <>
                <SearchResults
                  data={this.props.gifs.searchGifsData}
                  searchValue={this.state.searchText}
                ></SearchResults>
              </>
            ) : (
              <>
                <h1 className="display-title">Trending</h1>

                <GifDisplay
                  gifSize={250}
                  marginAndPadding={20}
                  getMore={"https://giphy.com/trending-gifs"}
                  pending={this?.props?.gifs?.fetchTrendingGifPending}
                  // data={this?.props?.gifs?.trendingGifsData }
                  data={fakeData}
                ></GifDisplay>
              </>
            )}
          </div>
        </div>
      </>
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
      fetchRandom: getRandomGif,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
