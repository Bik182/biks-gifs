import {
  fetchTrendingGifPending,
  fetchTrendingGifSuccess,
  fetchTrendingGifError,
  fetchSearchGifPending,
  fetchSearchGifSuccess,
  fetchSearchGifError,
  fetchRandomGifSuccess,
  fetchRandomGifError,
  fetchRandomGifPending
} from "../actions/actions.js";
import config from "../../config.js";
import {parseTrending} from "../helpers/CombineGifs";
export function fetchGifs() { console.log("trending gifs fetch ");
  return (dispatch) => {
    dispatch(fetchTrendingGifPending);
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${config.MY_KEY}&limit=25&rating=g`,
      {
        method: "GET",
        headers: {
          "Content-Type": " application/x-www-form-urlencoded",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.meta.msg === "OK") {
          console.log("trending gifs fetch success");
          const parsedData = parseTrending(json.data);
         
          dispatch(fetchTrendingGifSuccess(parsedData));
        } else {
          console.log("ERRPR", json);
          dispatch(fetchTrendingGifError());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchTrendingGifError());
      });
  };
}

export function getRandomGif(){
 return (dispatch) => {
    dispatch(fetchRandomGifPending);
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${config.MY_KEY}&rating=g`,
      {
        method: "GET",
        headers: {
          "Content-Type": " application/x-www-form-urlencoded",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.meta.msg === "OK") {
          console.log("trending gifs fetch success");
          dispatch(fetchRandomGifSuccess(json.data));
        } else {
          console.log("ERRPR", json);
          dispatch(fetchRandomGifError());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchRandomGifError());
      });
  };
}

export function bySearch(search) {
 
  return (dispatch) => {
    dispatch(fetchSearchGifPending);
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${config.MY_KEY}&limit=6&rating=g`,
      {
        method: "GET",
        headers: {
          "Content-Type": " application/x-www-form-urlencoded",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.meta.msg === "OK") {
          console.log("search gifs fetch success");
          dispatch(fetchSearchGifSuccess(json.data,search));
        } else {
          dispatch(fetchSearchGifError());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchSearchGifError());
      });
  };
}
