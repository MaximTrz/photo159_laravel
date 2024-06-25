import * as React from "react";
import { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch } from "react-redux";
import Context from "./context";

import Router from "./router";
import { store } from "./store";

import ApiService from "./apiService";

import "./bootstrap";
import "normalize.css";
import "./style/app.scss";
import { setMargins, setMaterials, setPrices, setSizes } from "./store/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const contextValue = { apiService: new ApiService() };

const App = () => {
    const { apiService } = useContext(Context);
    const dispatch = useDispatch();

    const fetchData = () => {
        apiService
            .getPricesFormServer()
            .then((serverPriceData) => {
                dispatch(setMaterials(serverPriceData.materials));
                dispatch(setSizes(serverPriceData.sizes));
                dispatch(setPrices(serverPriceData.prices));
                dispatch(setMargins(serverPriceData.margins));
            })
            .catch((error) => {
                console.error("Error fetching price data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <Router />;
};

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Context.Provider value={contextValue}>
                <App />
            </Context.Provider>
        </React.StrictMode>
    </Provider>,
);
