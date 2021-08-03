// Imports: Dependencies
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import initialState from "../reducers/index.js";
// Imports: Redux
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from "../reducers/index.js";

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['gifSearchReducer'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

// Redux: Store
const store = createStore(pReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export  {store, persistor};
