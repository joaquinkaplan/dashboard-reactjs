import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";

import App from "./App.js";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
