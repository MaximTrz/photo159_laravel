import { createSlice } from "@reduxjs/toolkit";

import StateType from "../types/StateType";
import PriceType from "../types/PriceType";
import MaterialType from "../types/MaterialType";
import SizeType from "../types/SizeType";
import PhotoType from "../types/PhotoType";

const initialState: StateType = {
    prices: [],
    materials: [],
    sizes: [],
    photos: [
        {
            id: 1,
            size: 1,
            material: 1,
            amount: 1,
            price: 10,
            image: "photo_1.jpg",
        },
        {
            id: 2,
            size: 1,
            material: 1,
            amount: 1,
            price: 10,
            image: "photo_1.jpg",
        },
        {
            id: 3,
            size: 1,
            material: 1,
            amount: 1,
            price: 10,
            image: "photo_1.jpg",
        },
        {
            id: 4,
            size: 1,
            material: 1,
            amount: 1,
            price: 10,
            image: "photo_1.jpg",
        },
        {
            id: 5,
            size: 1,
            material: 1,
            amount: 1,
            price: 10,
            image: "photo_1.jpg",
        },
    ],
};

const toolkitSlice = createSlice({
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
        addPhoto: (state, { payload }: { payload: PhotoType }) => {
            state.photos.push(payload);
        },
    },
});

export default toolkitSlice.reducer;

export const { setPrices, setMaterials, setSizes, addPhoto } =
    toolkitSlice.actions;
