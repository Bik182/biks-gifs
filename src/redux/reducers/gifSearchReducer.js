//import * as _ from "lodash";
import { parseGifs } from "../helpers/CombineGifs";

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
  ADD_SEARCHED_DATA,
  REMOVE_ADDED_TERM,
} from "../actions/actions.js";

// Initial State
export const initialState = {
  fetchTrendingGifError: null,
  fetchTrendingGifPending: null,
  fetchTrendingGifSuccess: null,
  fetchGifSearchError: null,
  fetchGifSearchSuccess: null,
  fetchGifSearchPending: null,
  searchGifsData: [],
  parsedGifsData: [],
  temporarySearchData: {},
  numSearchAdded: 0,
  addedTerms: [],
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
        addedTerms: ["trending", ...state.addedTerms],
        parsedGifsData: [...state.parsedGifsData, action.data],
      };
    }
    case FETCH_TRENDING_GIF_ERROR: {
      return {
        ...state,
        fetchTrendingGifError: true,
        fetchTrendingGifPending: false,
        fetchTrendingGifSuccess: false,
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
      const parsed = parseGifs(action.data, action.searchType);
      return {
        ...state,
        fetchSearchGifError: false,
        fetchSearchGifPending: false,
        fetchSearchGifSuccess: true,
        searchGifsData: action.data,

        temporarySearchData: parsed,
      };
    }
    case REMOVE_ADDED_TERM: {
      const newParsed = state.parsedGifsData.filter((obj) => {
        return Object.keys(obj)[0].toLowerCase() !== action.term.toLowerCase();
      });
      const prevAdded = state.numSearchAdded - 1;
      const index = state.addedTerms.indexOf(action.term.toLowerCase());
      const newTerms = state.addedTerms.splice(index, 1);
      return {
        ...state,
        numSearchAdded: prevAdded,

        parsedGifsData: newParsed,
      };
    }
    case ADD_SEARCHED_DATA: {
      const parsed = state.temporarySearchData;
      const prevAdded = state.numSearchAdded + 1;
      return {
        ...state,
        numSearchAdded: prevAdded,
        temporarySearchData: {},
        parsedGifsData: [...state.parsedGifsData, parsed],
        addedTerms: [...state.addedTerms, action.term],
        searchGifsData: []
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
    default:
      return state;
  }
};

// Exports
export default gifSearchReducer;
