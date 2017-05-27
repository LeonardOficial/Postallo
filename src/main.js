//import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";

import { store, history } from "./store/store.js";
import routes from "./routes.js";

import "./styles/styles";

render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
document.getElementById("root")
);




