import { createSlice } from "@reduxjs/toolkit";

import StateType from "../types/StateType";
import PriceType from "../types/PriceType";
import MaterialType from "../types/MaterialType";
import SizeType from "../types/SizeType";
import PhotoType from "../types/PhotoType";
import OptionsType from "../types/OptionsType";

const initialState: StateType = {
    prices: [],
    materials: [],
    sizes: [],
    margins: [],
    photos: [
        {
            id: 1,
            size_id: 2,
            material_id: 1,
            amount: 1,
            price: 10,
            image: "1.jpg",
        },
        {
            id: 2,
            size_id: 2,
            material_id: 1,
            amount: 1,
            price: 10,
            image: "1.jpg",
        },
        {
            id: 3,
            size_id: 2,
            material_id: 1,
            amount: 1,
            price: 10,
            image: "1.jpg",
        },
        {
            id: 4,
            size_id: 2,
            material_id: 1,
            amount: 1,
            price: 10,
            image: "1.jpg",
        },
        {
            id: 5,
            size_id: 2,
            material_id: 1,
            amount: 1,
            price: 10,
            image: "1.jpg",
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
        setMargins: (state, { payload }: { payload: OptionsType[] }) => {
            state.margins = payload;
        },
        addPhoto: (state, { payload }: { payload: PhotoType }) => {
            state.photos.push(payload);
        },
        setAmount: (
            state,
            { payload }: { payload: { id: number; amount: number } },
        ) => {
            const photoToUpdate = state.photos.find(
                (photo) => photo.id === payload.id,
            );
            if (photoToUpdate) {
                if (payload.amount > 0) {
                    photoToUpdate.amount = payload.amount;
                }
            }
        },
        setPhotoSize: (
            state,
            { payload }: { payload: { id: number; sizeId: number } },
        ) => {
            const photoToUpdate = state.photos.find(
                (photo) => photo.id === payload.id,
            );

            const price = state.prices.find(
                (price) =>
                    price.size_id === payload.sizeId &&
                    price.material_id === photoToUpdate?.material_id,
            );

            if (photoToUpdate) {
                if (price) {
                    photoToUpdate.size_id = payload.sizeId;
                } else {
                    const correctPrice = state.prices.find(
                        (price) => price.size_id === payload.sizeId,
                    );
                    if (correctPrice) {
                        photoToUpdate.size_id = payload.sizeId;
                        photoToUpdate.material_id = correctPrice.material_id;
                    }
                }
            }
        },
        setPhotoMaterial: (
            state,
            { payload }: { payload: { id: number; materialId: number } },
        ) => {
            const photoToUpdate = state.photos.find(
                (photo) => photo.id === payload.id,
            );

            const price = state.prices.find(
                (price) =>
                    price.material_id === payload.materialId &&
                    price.size_id === photoToUpdate?.size_id,
            );
            if (photoToUpdate) {
                if (price) {
                    photoToUpdate.material_id = payload.materialId;
                } else {
                    const correctPrice = state.prices.find(
                        (price) => price.material_id === payload.materialId,
                    );
                    if (correctPrice) {
                        photoToUpdate.material_id = payload.materialId;
                        photoToUpdate.size_id = correctPrice.size_id;
                    }
                }
            }
        },
    },
});

export default toolkitSlice.reducer;

export const {
    setPrices,
    setMaterials,
    setSizes,
    addPhoto,
    setMargins,
    setAmount,
    setPhotoMaterial,
    setPhotoSize,
} = toolkitSlice.actions;
