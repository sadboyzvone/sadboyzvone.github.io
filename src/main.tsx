import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import "react-vertical-timeline-component/style.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
