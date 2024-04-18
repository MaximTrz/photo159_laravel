import * as React from "react";
import ReactDOM from "react-dom/client";
import Context from "./context";

import Router from "./router";

import ApiService from "./apiService";

import "./bootstrap";
import "normalize.css";
import "./style/app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const contextValue = { apiService: new ApiService() };

root.render(
    <React.StrictMode>
        <Context.Provider value={contextValue}>
            <Router />
        </Context.Provider>
    </React.StrictMode>,
);
