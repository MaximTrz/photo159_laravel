import { createSlice } from "@reduxjs/toolkit";

import StateType from "../types/StateType";
import PriceType from "../types/PriceType";
import MaterialType from "../types/MaterialType";
import SizeType from "../types/SizeType";
import OptionsType from "../types/OptionsType";

const initialState: StateType = {
    prices: [],
    materials: [],
    sizes: [],
    margins: [],
    lastID: 0,
    photos: [],
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
        addPhoto: (state, { payload }: { payload }) => {
            const newID = state.lastID + 1;
            state.lastID++;
            console.log(newID);
            const newPhoto = {
                id: newID,
                size_id: 4,
                material_id: 1,
                amount: 1,
                margin_id: 1,
                image: payload,
            };
            state.photos.push(newPhoto);
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

            if (photoToUpdate) {
                photoToUpdate.size_id = payload.sizeId;
            }
        },
        setPhotoMaterial: (
            state,
            { payload }: { payload: { id: number; materialId: number } },
        ) => {
            const photoToUpdate = state.photos.find(
                (photo) => photo.id === payload.id,
            );
            if (photoToUpdate) {
                photoToUpdate.material_id = payload.materialId;
            }
        },
        setPhotoMargin: (
            state,
            { payload }: { payload: { id: number; marginId: number } },
        ) => {
            const photoToUpdate = state.photos.find(
                (photo) => photo.id === payload.id,
            );
            if (photoToUpdate) {
                photoToUpdate.margin_id = payload.marginId;
            }
        },
        deletePhoto: (state, { payload }: { payload: { id: number } }) => {
            const newPhotos = state.photos.filter(
                (photo) => photo.id !== payload.id,
            );
            state.photos = newPhotos;
        },
        deleteAll: (state) => {
            state.photos = [];
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
    setPhotoMargin,
    deleteAll,
    deletePhoto,
} = toolkitSlice.actions;
