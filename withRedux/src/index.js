import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Wall from "./Wall";

//Redux
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Wall />
  </Provider>,
  document.getElementById("root")
);
