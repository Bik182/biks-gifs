// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import gifSearchReducer from "./gifSearchReducer.js";
import { initialState as gifSearchReducerInitial } from "./gifSearchReducer.js";

const initialState = {
    gifSearchReducer: gifSearchReducerInitial,
  
};

// Redux: Root Reducer
const rootReducer = combineReducers({
    gifSearchReducer: gifSearchReducer,
 
});
// Exports
export default rootReducer;