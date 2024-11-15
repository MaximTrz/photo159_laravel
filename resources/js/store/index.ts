import { combineReducers, configureStore } from "@reduxjs/toolkit";

import toolkitSlice from "./Reducer";
import contactSlies from "./pagesSlice";

const rootReducer = combineReducers({
    toolkitSlice,
    contactSlies,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
