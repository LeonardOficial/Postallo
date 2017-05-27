import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { hashHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers/rootReducer";

const middleware = applyMiddleware(thunk, routerMiddleware(hashHistory));

export const store = createStore(rootReducer, middleware);

export const history = syncHistoryWithStore(hashHistory, store);





