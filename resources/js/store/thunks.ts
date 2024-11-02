import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import PriceType from "../types/PriceType";
import MaterialType from "../types/MaterialType";
import SizeType from "../types/SizeType";
import OptionsType from "../types/OptionsType";

import {
    setMaterials,
    setSizes,
    setPrices,
    setMargins,
    setLoaded,
} from "./Reducer";
import ApiService from "../apiService";

const apiService = new ApiService();

export enum ERequestStatus {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCCEEDED = "SUCCEEDED",
    FAILED = "FAILED",
}

interface PriceStateType {
    prices: PriceType[];
    materials: MaterialType[];
    sizes: SizeType[];
    margins: OptionsType[];
    status: ERequestStatus;
}

const initialState: PriceStateType = {
    prices: [],
    materials: [],
    sizes: [],
    margins: [],
    status: ERequestStatus.IDLE,
};

export const priceSlice = createSlice({
    name: "prices",
    initialState,
    reducers: {
        setPrices: (state, { payload }: { payload: PriceType[] }) => {
            state.prices = payload;
        },
        setMaterials: (state, { payload }: { payload: MaterialType[] }) => {
            state.materials = payload;
        },
        setSizes: (state, { payload }: { payload: SizeType[] }) => {
            state.sizes = payload;
        },
        setMargins: (state, { payload }: { payload: OptionsType[] }) => {
            state.margins = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPrice.pending, (state) => {
                console.log(state);
                state.status = ERequestStatus.LOADING;
            })
            .addCase(fetchPrice.fulfilled, (state, { payload }) => {
                console.log(state, payload);
                state.status = ERequestStatus.SUCCEEDED;
                state.prices = payload.prices;
                state.materials = payload.materials;
                state.sizes = payload.sizes;
                state.margins = payload.margins;
            })
            .addCase(fetchPrice.rejected, (state, { payload }) => {
                state.status = ERequestStatus.FAILED;
                console.log(state, payload);
            });
    },
});

export const fetchPrice = createAsyncThunk(
    "prices/fetchPrice",
    async (_, thunkAPI) => {
        try {
            const serverPriceData = await apiService.getPricesFormServer();
            return serverPriceData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const fetchPriceData = createAsyncThunk(
    "fetchPriceData",
    async (_, { dispatch }) => {
        const serverPriceData = await apiService.getPricesFormServer();
        dispatch(setMaterials(serverPriceData.materials));
        dispatch(setSizes(serverPriceData.sizes));
        dispatch(setPrices(serverPriceData.prices));
        dispatch(setMargins(serverPriceData.margins));
        dispatch(setLoaded(true));
    },
);
