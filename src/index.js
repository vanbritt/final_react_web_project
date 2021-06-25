import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routing from "./container/Routing";
import './Styles.css'
ReactDOM.render(
  <Provider store={store}>
    <Routing></Routing>
  </Provider>,
  document.getElementById("root")
);
