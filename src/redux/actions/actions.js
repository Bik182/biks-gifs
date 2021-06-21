export const FETCH_TRENDING_GIF_SUCCESS = "FETCH_TRENDING_GIF_SUCCESS";
export const FETCH_TRENDING_GIF_PENDING = "FETCH_TRENDING_GIF_PENDING";
export const FETCH_TRENDING_GIF_ERROR = "FETCH_TRENDING_GIF_ERROR";

export const FETCH_SEARCH_GIF_SUCCESS = "FETCH_SEARCH_GIF_SUCCESS";
export const FETCH_SEARCH_GIF_PENDING = "FETCH_SEARCH_GIF_PENDING";
export const FETCH_SEARCH_GIF_ERROR = "FETCH_SEARCH_GIF_ERROR";

export function fetchTrendingGifPending() {
  return {
    type: FETCH_TRENDING_GIF_PENDING,
  };
}
export function fetchTrendingGifSuccess(data) {
  return {
    type: FETCH_TRENDING_GIF_SUCCESS,
    data: data,
  };
}
export function fetchTrendingGifError() {
  return {
    type: FETCH_TRENDING_GIF_ERROR,
  };
}

export function fetchSearchGifPending() {
  return {
    type: FETCH_SEARCH_GIF_PENDING,
  };
}
export function fetchSearchGifSuccess(data) {
  return {
    type: FETCH_SEARCH_GIF_SUCCESS,
    data: data,
  };
}
export function fetchSearchGifError() {
  return {
    type: FETCH_SEARCH_GIF_ERROR,
  };
}
