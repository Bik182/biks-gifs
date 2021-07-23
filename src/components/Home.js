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
import searchStyle from "./searchStyles.css";
import GifImage from "./GifImage";
import { addSearchedData, removeAddedTerm } from "../redux/actions/actions.js";
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
    textIsEmpty: true,
    width: 0,
    height: 0,
    defaultRandomGif:
      "https://media4.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif?cid=ecf05e47ukeeoewe3120bohcs5fcic0ryzs6e3tifymg1qlf&rid=giphy.gif&ct=g",
  };

  componentDidMount() {
    this.props.fetch();
    // this.props.search();

    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  handleSearchEmpty = (textLength) => {
    if (textLength <= 0) {
      this.setState({
        textIsEmpty: true,
      });
    }
  };
  searchMethod = (value) => {
    this.setState({
      searchText: value,
      userSearched: value == "" ? false : true,
      textIsEmpty: value == "" ? true : false,
    });
    if (value !== "") {
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
  handleAddToList = () => {
    this.props.addData();
    this.setState({
      userSearched: false,
    });
  };
  handleRemoveTerm = (term) => {
    this.props.removeTerm(term);
    this.setState({
      userSearched: false,
    });
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    let num = 0;
    console.log(this.props.gifs.parsedGifsData);
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
              handleSearchEmpty={this.handleSearchEmpty}
            ></Search>
          </div>
          <div
            className={
              this.state.searchFocus ? "home-container-hide" : "home-container"
            }
          >
            {this.state.userSearched && !this.state.textIsEmpty ? (
              <>
                <SearchResults
                  data={this.props.gifs.searchGifsData}
                  searchValue={this.state.searchText}
                  addToList={this.handleAddToList}
                  buttonEnabled={
                    this.props.gifs.numSearchAdded == 5 ? false : true
                  }
                ></SearchResults>
              </>
            ) : (
              <>
                {this.props.gifs?.parsedGifsData?.map((display) => {
                  console.log("hey", display);
                  let title =
                    Object.keys(display)[0].charAt(0).toUpperCase() +
                    Object.keys(display)[0].slice(1);
                  return (
                    <>
                    <div className="display-header">
                      <h1 className="display-title">{title}</h1>
                      <button
                        id="addButton"
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => this.handleRemoveTerm(title.toLowerCase())}
                      >
                     
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                      </button> </div>
                      <GifDisplay
                        gifSize={250}
                        marginAndPadding={20}
                        getMore={`https://giphy.com/${title}`}
                        
                        // pending={this?.props?.gifs?.fetchTrendingGifPending}
                        data={Object.values(display)[0]}
                      ></GifDisplay>
                      
                    </>
                  );
                })}

                {/* <h1 className="display-title">One</h1>
                <GifDisplay
                  gifSize={250}
                  marginAndPadding={20}
                  getMore={"https://giphy.com/trending-gifs"}
                  // pending={this?.props?.gifs?.fetchTrendingGifPending}
                  data={this.props.gifs?.parsedGifsData?.trending ? this.props.gifs?.parsedGifsData?.trending:[]}
                ></GifDisplay>
                <h1 className="display-title">One</h1>
                <GifDisplay
                  gifSize={250}
                  marginAndPadding={20}
                  getMore={"https://giphy.com/trending-gifs"}
                  // pending={this?.props?.gifs?.fetchTrendingGifPending}
                  data={
                    this.props.gifs?.parsedGifsData?.searched
                      ? this.props.gifs?.parsedGifsData?.searched
                      : []
                  }
                ></GifDisplay> */}
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
      addData: addSearchedData,
      removeTerm: removeAddedTerm,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
