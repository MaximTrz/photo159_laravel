import * as React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";

import Router from "./router";
import { fetchPriceData } from "./store/thunks";
import { store } from "./store";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import PreloadDialog from "./components/preload-dialog";
import UploadDialog from "./components/upload-dialog";

import "./bootstrap";
import "normalize.css";
import "./style/app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    const dispatch = useDispatch();
    const loaded = useSelector((state) => state.toolkitSlice.loaded);

    useEffect(() => {
        dispatch(fetchPriceData());
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
                    <PreloadDialog />
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
