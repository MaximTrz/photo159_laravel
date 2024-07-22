import * as React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";

import Router from "./router";
import { fetchPriceData } from "./store/thunks";
import { store } from "./store";
import { RootState } from "./store";

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
    const dispatch = useDispatch();
    const loaded = useSelector((state: RootState) => state.toolkitSlice.loaded);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(fetchPriceData() as any);
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
