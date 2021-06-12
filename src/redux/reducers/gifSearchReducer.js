//import * as _ from "lodash";

import {
  FETCH_GIF_SEARCH_SUCCESS,
  FETCH_GIF_SEARCH_ERROR,
  FETCH_GIF_SEARCH_PENDING,
} from "../actions/actions.js";

// Initial State
export const initialState = {
  fetchGifSearchError: null,
  fetchGifSearchPending: null,
  fetchGifSearchSuccess: null,
  gifsData: [],
};
// Reducers (Modifies The State And Returns A New State)
export const gifSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GIF_SEARCH_PENDING: {
      return {
        // State
        ...state,
        // Redux store
        fetchGifSearchError: false,
        fetchGifSearchPending: true,
        fetchGifSearchSuccess: false,
        gifsData: [],
      };
    }
    case FETCH_GIF_SEARCH_SUCCESS: {
      return {
        ...state,
        fetchGifSearchError: false,
        fetchGifSearchPending: false,
        fetchGifSearchSuccess: true,
        gifsData: action.data,
      };
    }
    case FETCH_GIF_SEARCH_ERROR: {
      return {
        ...state,
        fetchGifSearchError: true,
        fetchGifSearchPending: false,
        fetchGifSearchSuccess: false,
        gifsData: [],
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default gifSearchReducer;
