import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
//import { Provider } from "react-redux";
//import store from "./redux/store/store.js";
import NavBar from "./components/NavBar";
function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route component={Home} path="/" exact></Route>
        </Switch>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
