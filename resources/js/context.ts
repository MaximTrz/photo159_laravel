import { createContext } from "react";
import ApiService from "./apiService";

const Context = createContext({
    apiService: new ApiService(),
});

export default Context;
