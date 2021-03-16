import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/ReduxStore";
import SocialNetworkApp from "./App";

let rerenderEntireTree = () => {
  ReactDOM.render(<SocialNetworkApp />, document.getElementById("root"));
};

rerenderEntireTree(store.getState());
