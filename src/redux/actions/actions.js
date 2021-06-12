export const FETCH_GIF_SEARCH_SUCCESS = "FETCH_GIF_SEARCH_SUCCESS";
export const FETCH_GIF_SEARCH_PENDING = "FETCH_GIF_SEARCH_PENDING";
export const FETCH_GIF_SEARCH_ERROR = "FETCH_GIF_SEARCH_ERROR";


export function fetchGifSearchPending() {
    return {
        type: FETCH_GIF_SEARCH_PENDING,
    };
}
export function fetchGifSearchSuccess(data) {
    return {
        type: FETCH_GIF_SEARCH_SUCCESS,
        data: data
    };
}
export function fetchGifSearchError() {
    return {
        type: FETCH_GIF_SEARCH_ERROR,
    };
}

