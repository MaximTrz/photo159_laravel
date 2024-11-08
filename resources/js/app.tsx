import * as React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";

import Router from "./router";

import { fetchPrice } from "./store/Reducer";

import { store } from "./store";
import { RootState } from "./store";

import { AppDispatch } from "./store";

import { ERequestStatus } from "./types/ERequestStatus";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import UploadDialog from "./components/upload-dialog";

import "normalize.css";
import "./style/app.scss";

const rootElement = document.getElementById("root");
let root;
if (rootElement) {
    root = ReactDOM.createRoot(rootElement);
}

const App = () => {
    const dispatch = useDispatch<AppDispatch>();

    const loaded = useSelector(
        (state: RootState) =>
            state.toolkitSlice.status === ERequestStatus.SUCCEEDED,
    );

    useEffect(() => {
        const data = fetchPrice();
        dispatch(data);
    }, []);

    return (
        <>
            {!loaded ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <UploadDialog />
                    <Router />
                </>
            )}
        </>
    );
};

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
