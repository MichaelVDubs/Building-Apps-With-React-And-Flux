import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

//This import creates a const called render that references react-dom's render function
/*
This would be equivalent to:
import ReactDom from "react-dom";
const render = ReactDom.render;
*/
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
