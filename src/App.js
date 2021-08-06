import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store.js";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          
          <Switch>
            <Route component={Home} path="/" exact></Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
