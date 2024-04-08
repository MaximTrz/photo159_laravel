import * as React from "react";
import ReactDOM from "react-dom/client";

import TabsList from "./components/tabs-list";
import Header from "./components/header";

import "./bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <div className="layout">
            <nav className="header__nav">
                <TabsList />
            </nav>
            <header className="layout__header">
                <Header />
            </header>
            <main className="layout__main">main</main>
            <footer className="layout__footer">&#9400; 2024</footer>
        </div>
    </React.StrictMode>,
);
