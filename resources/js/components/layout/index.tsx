import * as React from "react";
import TabsList from "../tabs-list";
import Header from "../header";
import { Routes, Route } from "react-router-dom";

import Prices from "../../pages/prices";

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
                <div className="layout__content">
                    <Routes>
                        <Route path="/" element={<Prices />} />
                    </Routes>
                </div>
            </main>
            <footer className="layout__footer">&#9400; 2024</footer>
        </div>
    );
};

export default Layout;
