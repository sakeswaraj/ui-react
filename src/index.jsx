import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MainProvider from "./context/main_context.js";

ReactDOM.render(
  <MainProvider>
    <App />
  </MainProvider>,
  document.getElementById("root")
);
