import * as React from "react";
import { useContext } from "react";
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

    const priceData = apiService.getPrices();

    dispatch(setMaterials(priceData.materials));
    dispatch(setSizes(priceData.sizes));
    dispatch(setPrices(priceData.prices));
    dispatch(setMargins(priceData.margins));

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
