import React from "react";
import Search from "./Search";
import GifDisplay from "./GifDisplay";
import SearchResults from "./SearchResults";
import {
  fetchGifs,
  bySearch,
  getRandomGif,
  fetchTerms,
} from "../redux/fetch/fetchGifs";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Logo from "./Logo";
import { MobileView, BrowserView } from "react-device-detect";

import GifImage from "./GifImage";
import { addSearchedData, removeAddedTerm } from "../redux/actions/actions.js";
import giphyLogo from "../assets/Poweredby_640px-Black_VertLogo.png";
import "./styles/home.scss";

class Home extends React.Component {
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
    this.props.fetchInitialTerms(this.props.user.userTerms);
    
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
    const newVal = value.replace(/\W/g, "").toLowerCase();
    this.setState({
      searchText: newVal,
      userSearched: newVal === "" ? false : true,
      textIsEmpty: newVal === "" ? true : false,
      canAdd: true,
    });
    if (newVal !== "") {
      if (this.props.user.userTerms.includes(newVal) || newVal === "trending") {
        this.setState({
          canAdd: false,
        });
      }
      this.props.search(newVal);
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
    console.log("this: ", this.props.gifs);
    return (
      <>
        <MobileView>
          <div className="mobile-div">
            <Logo multiplier={10}></Logo>
            <Logo multiplier={5} source={giphyLogo}></Logo>
            <span className="mobile-text">
              {" "}
              Please use a laptop/desktop browser, mobile coming soon-ish :)
            </span>
          </div>
        </MobileView>
        <BrowserView>
          <div className="top-container ">
            <div className="slanted-div-wrapper">
              <h1 className="logo-text">Bik's Gifs</h1>
            </div>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                      this.props.gifs.numSearchAdded === 5 || !this.state.canAdd
                        ? false
                        : true
                    }
                  ></SearchResults>
                </>
              ) : (
                <>
                  <div className="home-logo">
                    <h1 className="home-text"> Home </h1>
                  </div>
                  <div>
                    <div className="display-header">
                      <h1 className="display-title">Trending</h1>
                    </div>

                    <GifDisplay
                      gifSize={250}
                      marginAndPadding={20}
                      getMore={`https://giphy.com/trending`}
                      // pending={this?.props?.gifs?.fetchTrendingGifPending}
                      data={this.props.gifs?.trendingData}
                    ></GifDisplay>
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
    user: state.userReducer,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetch: fetchGifs,
      fetchInitialTerms: fetchTerms,
      search: bySearch,
      fetchRandom: getRandomGif,
      addData: addSearchedData,
      removeTerm: removeAddedTerm,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
