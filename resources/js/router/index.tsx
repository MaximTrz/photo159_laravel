import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TabsList from "../components/tabs-list";
import Header from "../components/header";

function Router() {
    return (
        <BrowserRouter>
            <div className="layout">
                <nav className="header__nav">
                    <TabsList />
                </nav>
                <header className="layout__header">
                    <Header />
                </header>
                <main className="layout__main">
                    <Routes>
                        <Route path="/" element={<div>!!!</div>} />
                    </Routes>
                </main>
                <footer className="layout__footer">&#9400; 2024</footer>
            </div>
        </BrowserRouter>
    );
}

export default Router;
