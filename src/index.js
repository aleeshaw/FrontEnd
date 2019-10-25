import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ServiceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

ReactDOM.render(
    <Router>
        <App />{" "}
    </Router>,
    document.getElementById("root")
);

ServiceWorker();
