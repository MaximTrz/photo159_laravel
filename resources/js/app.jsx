import * as React from "react";
import ReactDOM from "react-dom/client";

import Router from "./router";

import "./bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
);
