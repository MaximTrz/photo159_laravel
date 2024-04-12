import * as React from "react";
import TabsList from "../tabs-list";
import Header from "../header";
import { Routes, Route } from "react-router-dom";

import "./style.scss";

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <header className="layout__header">
                <nav className="header__nav">
                    <TabsList />
                </nav>
                <Header />
            </header>
            <main className="layout__main">
                <Routes>
                    <Route path="/" element={<div>!!!</div>} />
                </Routes>
            </main>
            <footer className="layout__footer">&#9400; 2024</footer>
        </div>
    );
};

export default Layout;
