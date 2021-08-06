// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import gifSearchReducer from "./gifSearchReducer.js";
import userReducer from "./userReducer.js";


// Redux: Root Reducer
const rootReducer = combineReducers({
    gifSearchReducer: gifSearchReducer,
    userReducer: userReducer
});
// Exports
export default rootReducer;