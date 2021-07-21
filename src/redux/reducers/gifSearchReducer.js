//import * as _ from "lodash";

import {
  FETCH_TRENDING_GIF_SUCCESS,
  FETCH_TRENDING_GIF_ERROR,
  FETCH_TRENDING_GIF_PENDING,
  FETCH_SEARCH_GIF_PENDING,
  FETCH_SEARCH_GIF_SUCCESS,
  FETCH_SEARCH_GIF_ERROR,
  FETCH_RANDOM_GIF_ERROR,
  FETCH_RANDOM_GIF_PENDING,
  FETCH_RANDOM_GIF_SUCCESS,
} from "../actions/actions.js";

// Initial State
export const initialState = {
  fetchTrendingGifError: null,
  fetchTrendingGifPending: null,
  fetchTrendingGifSuccess: null,
  fetchGifSearchError: null,
  fetchGifSearchSuccess: null,
  fetchGifSearchPending: null,
  trendingGifsData: [],
  searchGifsData: [],
};
// Reducers (Modifies The State And Returns A New State)
export const gifSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING_GIF_PENDING: {
      return {
        // State
        ...state,
        // Redux store
        fetchTrendingGifError: false,
        fetchTrendingGifPending: true,
        fetchTrendingGifSuccess: false,
      };
    }
    case FETCH_TRENDING_GIF_SUCCESS: {
      return {
        ...state,
        fetchTrendingGifError: false,
        fetchTrendingGifPending: false,
        fetchTrendingGifSuccess: true,
        trendingGifsData: action.data,
      };
    }
    case FETCH_TRENDING_GIF_ERROR: {
      return {
        ...state,
        fetchTrendingGifError: true,
        fetchTrendingGifPending: false,
        fetchTrendingGifSuccess: false,
        trendingGifsData: [],
      };
    }

    case FETCH_SEARCH_GIF_PENDING: {
      return {
        // State
        ...state,
        // Redux store
        fetchSearchGifError: false,
        fetchSearchGifPending: true,
        fetchSearchGifSuccess: false,
      };
    }
    case FETCH_SEARCH_GIF_SUCCESS: {
      return {
        ...state,
        fetchSearchGifError: false,
        fetchSearchGifPending: false,
        fetchSearchGifSuccess: true,
        searchGifsData: action.data,
      };
    }
    case FETCH_SEARCH_GIF_ERROR: {
      return {
        ...state,
        fetchSearchGifError: true,
        fetchSearchGifPending: false,
        fetchSearchGifSuccess: false,
        searchGifsData: [],
      };
    }

    case FETCH_RANDOM_GIF_PENDING: {
      return {
        // State
        ...state,
        // Redux store
        fetchRandomGifError: false,
        fetchRandomGifPending: true,
        fetchRandomGifSuccess: false,
      };
    }
    case FETCH_RANDOM_GIF_SUCCESS: {
      console.log("FETCH_SEARCH_GIF_SUCCESS :", Object.keys(action.data));
      return {
        ...state,
        fetchRandomGifError: false,
        fetchRandomGifPending: false,
        fetchRandomGifSuccess: true,
        randomgGifLink: action.data.images.downsized.url,
      };
    }
    case FETCH_RANDOM_GIF_ERROR: {
      return {
        ...state,
        fetchRandomGifError: true,
        fetchRandomGifPending: false,
        fetchRandomGifSuccess: false,
        searchGifsData: [],
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
