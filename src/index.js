import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";

const store = configureStore();

const title = "Shipwell Test App";

ReactDOM.render(
  <Provider store={store}>
    <App title={title} />
  </Provider>,
  document.getElementById("root")
);

module.hot.accept();
