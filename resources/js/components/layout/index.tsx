import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import TabsList from "../tabs-list";
import Header from "../header";

import Prices from "../../pages/prices";

import ToolKitStateType from "../../types/ToolKitStateType";
import "./style.scss";
import PhotosList from "../photos-list";

const Layout: React.FC = () => {
    const photosList = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.photos,
    );
    console.log(photosList);

    return (
        <div className="layout">
            <header className="layout__header">
                <nav className="header__nav">
                    <TabsList />
                </nav>
                <Header />
            </header>
            <main className="layout__main">
                <div className="layout__photos">
                    <PhotosList photos={photosList} />
                </div>
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
