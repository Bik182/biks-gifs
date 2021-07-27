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
import { MobileView , BrowserView } from "react-device-detect";

import searchStyle from "./searchStyles.css";
import GifImage from "./GifImage";
import { addSearchedData, removeAddedTerm } from "../redux/actions/actions.js";
import giphyLogo from "../assets/Poweredby_640px-Black_VertLogo.png";
import homePic from "../assets/home.png";

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
    canAdd: true,
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
    } else {
      this.setState({
        textIsEmpty: false,
      });
    }
  };
  searchMethod = (value) => {
    this.setState({
      searchText: value,
      userSearched: value == "" ? false : true,
      textIsEmpty: value == "" ? true : false,
      canAdd: true,
    });
    if (value !== "") {
      if (this.props.gifs.addedTerms.includes(value)) {
        this.setState({
          canAdd: false,
        });
      }
      this.props.search(value);
    }
  };
  goHome = () => {
    this.setState({
      userSearched: false,
    });
  };
  randomMethod = () => {
    this.props.fetchRandom();
  };
  handleSearchClicked = () => {
    this.setState({
      searchFocus: !this.state.searchFocus,
    });
  };
  handleAddToList = (value) => {
    this.props.addData(value);
    this.setState({
      userSearched: false,
    });
  };
  handleRemoveTerm = (term) => {
    this.setState({
      userSearched: false,
    });
    this.props.removeTerm(term);
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    let num = 0;
    return (
      <>
       <MobileView>
        <div className="mobile-div">
         <Logo multiplier={10} source={logoPic}></Logo>
         <Logo multiplier={5} source={giphyLogo}></Logo>
          <span className="mobile-text"> Please use a laptop/desktop browser, mobile coming soon-ish :)</span>
          </div>
        </MobileView> 
          <BrowserView>
        <div className="top-container ">
          <Logo multiplier={20} source={logoPic}></Logo>
          <Logo multiplier={10} source={giphyLogo}></Logo>
        </div>
        <div className="main-container">
          <div className="search-container">
            {this.state.userSearched && !this.state.textIsEmpty ? (
              <button
                onClick={this.goHome}
                id="home-button"
                className="home-icon-button"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </button>
            ) : (
              <></>
            )}
            <Search
              handleSearchClicked={this.handleSearchClicked}
              search={this.searchMethod}
              handleSearchEmpty={this.handleSearchEmpty}
            ></Search>
          </div>

          <div
            className={
              this.state.searchFocus && !this.state.textIsEmpty
                ? "home-container-hide"
                : "home-container"
            }
          >
            {this.state.userSearched && !this.state.textIsEmpty ? (
              <>
                <SearchResults
                  data={this.props.gifs.searchGifsData}
                  searchValue={this.state.searchText}
                  addToList={this.handleAddToList}
                  buttonEnabled={
                    this.props.gifs.numSearchAdded == 5 || !this.state.canAdd
                      ? false
                      : true
                  }
                ></SearchResults>
              </>
            ) : (
              <>
                <div className="home-logo">
                  <Logo
                    diffClass="home-icon-wrapper"
                    multiplier={10}
                    source={homePic}
                  ></Logo>
                </div>
                {this.props.gifs?.parsedGifsData?.map((display, key) => {
                  let title =
                    Object.keys(display)[0].charAt(0).toUpperCase() +
                    Object.keys(display)[0].slice(1);
                  return (
                    <div key={key}>
                      <div className="display-header">
                        <h1 className="display-title">{title}</h1>
                        <button
                          id="addButton"
                          type="button"
                          className="btn btn-secondary btn-home"
                          onClick={() =>
                            this.handleRemoveTerm(title.toLowerCase())
                          }
                        >
                          <span> </span>
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
                        </button>{" "}
                      </div>
                      <GifDisplay
                        gifSize={250}
                        marginAndPadding={20}
                        getMore={`https://giphy.com/${title}`}
                        // pending={this?.props?.gifs?.fetchTrendingGifPending}
                        data={Object.values(display)[0]}
                      ></GifDisplay>
                    </div>
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
         </BrowserView>
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
