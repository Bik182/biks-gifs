import {
  fetchGifSearchPending,
  fetchGifSearchSuccess,
  fetchGifSearchError,
} from "../actions/actions.js";

export function fetchGifs() {
  return (dispatch) => {
    dispatch(fetchGifSearchPending);
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=uFHAA1e06SvDK4uTfO8jjReco4o5UdrB&limit=10&rating=g",
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
          dispatch(fetchGifSearchSuccess(json.data));
        } else {
          dispatch(fetchGifSearchError());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchGifSearchError());
      });
  };
}
