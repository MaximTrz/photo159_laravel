import * as React from "react";

import { useRef, useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import TabsList from "../tabs-list";
import Header from "../header";

import Prices from "../../pages/prices";
import FAQ from "../../pages/faq/faq";
import Photos from "../photos";
import FormOrder from "../form-order";
import ServicesPage from "../../pages/services-page";
import ContactsPage from "../../pages/contacts";

import "./style.scss";
import usePhotos from "../../hooks/usePhotos";

const Layout: React.FC = () => {
    const { photosList } = usePhotos();
    const location = useLocation();
    const layoutPhotosRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (photosList.length > 0) {
            if (layoutPhotosRef.current) {
                const { bottom } =
                    layoutPhotosRef.current.getBoundingClientRect();
                const scrollToPosition = bottom + window.scrollY;

                window.scrollTo({
                    top: scrollToPosition,
                    behavior: "smooth",
                });
            }
        }
    }, [location]);

    const layoutPhotos =
        photosList.length > 0 ? (
            <div className="layout__photos" ref={layoutPhotosRef}>
                <Photos />
                <div className="layout__form-order">
                    <FormOrder />
                </div>
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
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                    </Routes>
                </div>
            </main>
            <footer className="layout__footer">
                &#9400; {new Date().getFullYear()}
            </footer>
        </div>
    );
};

export default Layout;
