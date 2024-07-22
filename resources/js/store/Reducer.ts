import { createSlice } from "@reduxjs/toolkit";

import StateType from "../types/StateType";
import PriceType from "../types/PriceType";
import MaterialType from "../types/MaterialType";
import SizeType from "../types/SizeType";
import OptionsType from "../types/OptionsType";
import PhotoType from "../types/PhotoType";

const initialState: StateType = {
    prices: [],
    materials: [],
    sizes: [],
    margins: [],
    lastID: 0,
    photos: [],
    aplyAll: {
        size_id: 4,
        material_id: 1,
        amount: 1,
        margin_id: 1,
    },
    loaded: false,
    preloading: false,
    uploading: false,
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
        setLoaded: (state, { payload }: { payload: boolean }) => {
            state.loaded = payload;
        },
        setPreloading: (state, { payload }: { payload: boolean }) => {
            state.preloading = payload;
        },
        setPhotoUploaded: (state, { payload }: { payload: PhotoType }) => {
            const photoToUpdate = state.photos.find(
                (photo) => photo.id === payload.id,
            );
            if (photoToUpdate) {
                photoToUpdate.uploaded = true;
            }
        },
        setUploading: (state, { payload }: { payload: boolean }) => {
            state.uploading = payload;
        },

        addPhotos: (state, { payload }: { payload: string[] }) => {
            const newPhotos = payload.map((photo) => {
                const newID = state.lastID + 1;
                state.lastID++;
                return {
                    id: newID,
                    size_id: 4,
                    material_id: 1,
                    amount: 1,
                    margin_id: 1,
                    image: photo,
                    uploaded: false,
                };
            });

            state.photos = [...state.photos, ...newPhotos];
            state.preloading = false;
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
        setApplyAllSize: (
            state,
            { payload }: { payload: { sizeId: number } },
        ) => {
            const isValidSize = state.sizes.some(
                (size) => size.id === payload.sizeId,
            );
            if (isValidSize) {
                state.aplyAll = {
                    ...state.aplyAll,
                    amount: payload.sizeId,
                };
            }
        },
        setApplyAllMaterial: (
            state,
            { payload }: { payload: { matetialId: number } },
        ) => {
            state.aplyAll = {
                ...state.aplyAll,
                amount: payload.matetialId,
            };
        },
        setApplyAllMargin: (
            state,
            { payload }: { payload: { marginId: number } },
        ) => {
            state.aplyAll = {
                ...state.aplyAll,
                amount: payload.marginId,
            };
        },
        setApplyAllAmount: (
            state,
            { payload }: { payload: { amount: number } },
        ) => {
            if (payload.amount > 0) {
                state.aplyAll = {
                    ...state.aplyAll,
                    amount: payload.amount,
                };
            }
        },

        applyAll: (state) => {
            const { size_id, material_id, amount, margin_id } = state.aplyAll;

            return {
                ...state,
                photos: state.photos.map((photo) => ({
                    ...photo,
                    size_id,
                    material_id,
                    amount,
                    margin_id,
                })),
            };
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
    addPhotos,
    setMargins,
    setAmount,
    setLoaded,
    setPreloading,
    setPhotoUploaded,
    setUploading,
    setPhotoMaterial,
    setPhotoSize,
    setPhotoMargin,
    deleteAll,
    applyAll,
    setApplyAllMaterial,
    setApplyAllSize,
    setApplyAllAmount,
    setApplyAllMargin,
    deletePhoto,
} = toolkitSlice.actions;
