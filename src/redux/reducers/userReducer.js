import { ADD_SEARCHED_DATA, REMOVE_ADDED_TERM } from "../actions/actions.js";

// Initial State
export const initialState = {
  userID: "0000",
  userTerms: [],
};
// Reducers (Modifies The State And Returns A New State)
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCHED_DATA: {
      return {
        ...state,
        userTerms: [...state.userTerms, action.term],
      };
    }
    case REMOVE_ADDED_TERM: {
      const index = state.userTerms.indexOf(action.term.toLowerCase());
      let newTerms = state.userTerms;
      if (index > -1) {
        newTerms.splice(index, 1);
      }
      return {
        ...state,

        userTerms: newTerms,
      };
    }
    // Default
    default:
      return state;
  }
};

// Exports
export default userReducer;
