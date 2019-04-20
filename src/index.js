import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Films from "./components/films";
import NotFound from "./components/NotFound";
import FilmCard from "./components/filmCard";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { Router, Route, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/films/:name" component={Films} />
      <Route path="/film/:name" component={FilmCard} />
      <Route path="*" component={NotFound}  status={404} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
