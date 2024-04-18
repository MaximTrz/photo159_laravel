import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSliceReduser from "./Reducer";

const rootReducer = combineReducers({
    toolkitSliceReduser,
});

export const store = configureStore({
    reducer: rootReducer,
});
