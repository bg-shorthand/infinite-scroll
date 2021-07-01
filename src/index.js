import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App/App";
import StoreProvider from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
