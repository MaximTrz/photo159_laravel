import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./Reducer";

const rootReducer = combineReducers({
    toolkitSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
