import * as React from "react";
import { Routes, Route } from "react-router-dom";

import TabsList from "../tabs-list";
import Header from "../header";

import Prices from "../../pages/prices";
import Photos from "../photos";

import "./style.scss";
import usePhotos from "../../hooks/usePhotos";

const Layout: React.FC = () => {
    const { photosList } = usePhotos();

    const layoutPhotos =
        photosList.length > 0 ? (
            <div className="layout__photos">
                <Photos />
            </div>
        ) : null;
    return (
        <div className="layout">
            <header className="layout__header">
                <nav className="header__nav">
                    <TabsList />
                </nav>
                <Header />
            </header>
            <main className="layout__main">
                {layoutPhotos}
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
