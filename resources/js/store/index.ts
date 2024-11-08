import { combineReducers, configureStore } from "@reduxjs/toolkit";

import toolkitSlice from "./Reducer";

const rootReducer = combineReducers({
    toolkitSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
