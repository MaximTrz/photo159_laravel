import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import ToolKitStateType from "../../types/ToolKitStateType";

import {
    setPhotoMaterial,
    setPhotoSize,
    setPhotoMargin,
    deletePhoto,
} from "../../store/Reducer";

import findPrice from "../../utils/findPrice";

const usePhtotoItem = () => {
    const sizes = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.sizes,
    );
    const materials = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.materials,
    );
    const prices = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.prices,
    );

    const dispatch = useDispatch();

    const getPrice = React.useCallback((sizeId: number, materialId: number) => {
        const size = sizes.find((size) => size.id === sizeId);
        const material = materials.find(
            (material) => material.id === materialId,
        );
        if (size && material) {
            const price = findPrice(size, material, prices);
            return price?.price;
        }
        return 0;
    }, []);

    const setMaterial = React.useCallback(
        (photoId: number, materialId: number) => {
            dispatch(setPhotoMaterial({ id: photoId, materialId: materialId }));
        },
        [],
    );
    const setSize = React.useCallback((photoId: number, sizeId: number) => {
        dispatch(setPhotoSize({ id: photoId, sizeId: sizeId }));
    }, []);

    const setMargin = React.useCallback(
        (photoId: number, margin_id: number) => {
            dispatch(setPhotoMargin({ id: photoId, marginId: margin_id }));
        },
        [],
    );

    const deletePhtotoById = (id: number) => {
        dispatch(deletePhoto({ id }));
    };

    return {
        getPrice,
        setMaterial,
        setSize,
        setMargin,
        deletePhtotoById,
    };
};

export default usePhtotoItem;
