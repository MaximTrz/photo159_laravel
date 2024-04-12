import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../components/layout";

function Router() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default Router;
