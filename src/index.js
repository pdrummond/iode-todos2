import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import todoReducer from "./todo/reducers/todoReducer";
import { Provider } from "react-redux";

const store = createStore(combineReducers({ todo: todoReducer }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
