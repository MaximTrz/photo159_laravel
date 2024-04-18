import { createSlice } from "@reduxjs/toolkit";

import PriceType from "../types/PriceType";
import MaterialType from "../types/MaterialType";
import SizeType from "../types/SizeType";

const initialState = {
    prices: {},
    materials: {},
    sizes: {},
};

const toolkitSliceReduser = createSlice({
    name: "toolkit",
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
    },
});

export default toolkitSliceReduser.reducer;

export const { setPrices, setMaterials, setSizes } =
    toolkitSliceReduser.actions;
