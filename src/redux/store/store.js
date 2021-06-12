// Imports: Dependencies
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import initialState from "../reducers/index.js";
// Imports: Redux
import rootReducer from "../reducers/index.js";
// Middleware: Redux Persist Config
// const persistConfig = {
//     // Root
//     key: "root",
//     // Storage Method (React Native)
//     storage: AsyncStorage,
//     // Whitelist (Save Specific Reducers)
//     whitelist: ["authReducer"],
//     // Blacklist (Don't Save Specific Reducers)
//     blacklist: [],
// };
// Middleware: Redux Persist Persisted Reducer
//const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

// Redux: Store
const store = createStore(rootReducer, applyMiddleware(...middlewares));
// Middleware: Redux Persist Persister
//let persistor = persistStore(store);
// Exports
export default store;
