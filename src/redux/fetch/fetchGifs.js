import {
  fetchTrendingGifPending,
  fetchTrendingGifSuccess,
  fetchTrendingGifError,
  fetchSearchGifPending,
  fetchSearchGifSuccess,
  fetchSearchGifError
} from "../actions/actions.js";
import config from "../../config.js";
export function fetchGifs() {
  return (dispatch) => {
    dispatch(fetchTrendingGifPending);
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${config.MY_KEY}&limit=10&rating=g`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.meta.msg === "OK") {
          console.log("trending gifs fetch success");
          dispatch(fetchTrendingGifSuccess(json.data));
        } else {
          dispatch(fetchTrendingGifError());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchTrendingGifError());
      });
  };
}

export function bySearch(search) {
  search = "pizza";
  return (dispatch) => {
    dispatch(fetchSearchGifPending);
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${config.MY_KEY}&limit=7&rating=g`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.meta.msg === "OK") {
          console.log("search gifs fetch success");
          dispatch(fetchSearchGifSuccess(json.data));
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
