import { useMemo, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";

import {
    setPhotoMaterial,
    setPhotoSize,
    setPhotoMargin,
    deleteAll,
    setUploading,
} from "../store/Reducer";

import PhotoType from "../types/PhotoType";

const usePhotoProperties = () => {
    const dispatch = useDispatch();

    const sizes = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.sizes,
    );

    const sizesForSelect = useMemo(() => {
        return sizes.map((size) => ({
            ...size,
            name: `${size.width} X ${size.height} (${size.comment})`,
        }));
    }, [sizes]);

    const materials = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.materials,
    );
    const margins = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.margins,
    );

    const prices = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.prices,
    );

    const findPriceByIDs = useCallback(
        (materialID: number, sizeID: number) => {
            const result = prices.find(
                (price) =>
                    price.material_id === materialID &&
                    price.size_id === sizeID,
            );
            const price = result ? result.price : 0;
            return { price: price };
        },
        [prices],
    );

    const setMaterial = useCallback(
        (photo: PhotoType, materialID: number) => {
            const price = findPriceByIDs(materialID, photo.size_id);
            if (price.price > 0) {
                dispatch(
                    setPhotoMaterial({ id: photo.id, materialId: materialID }),
                );
            } else {
                const correctPrice = prices.find((price) => {
                    return price.material_id === materialID;
                });

                if (correctPrice) {
                    dispatch(
                        setPhotoMaterial({
                            id: photo.id,
                            materialId: correctPrice.material_id,
                        }),
                    );
                    dispatch(
                        setPhotoSize({
                            id: photo.id,
                            sizeId: correctPrice.size_id,
                        }),
                    );
                }
            }
        },
        [findPriceByIDs, prices],
    );

    const setSize = useCallback(
        (photo: PhotoType, sizeID: number) => {
            const price = findPriceByIDs(photo.material_id, sizeID);

            if (price.price > 0) {
                dispatch(
                    setPhotoSize({
                        id: photo.id,
                        sizeId: sizeID,
                    }),
                );
            } else {
                const correctPrice = prices.find((price) => {
                    return price.size_id === sizeID;
                });

                if (correctPrice) {
                    dispatch(
                        setPhotoMaterial({
                            id: photo.id,
                            materialId: correctPrice.material_id,
                        }),
                    );
                    dispatch(
                        setPhotoSize({
                            id: photo.id,
                            sizeId: correctPrice.size_id,
                        }),
                    );
                }
            }
        },
        [findPriceByIDs, prices],
    );
    const setMargin = useCallback((photoId: number, margin_id: number) => {
        dispatch(setPhotoMargin({ id: photoId, marginId: margin_id }));
    }, []);

    const deleteAllPhoto = useCallback(() => {
        dispatch(deleteAll());
    }, []);

    const setUploadingStatus = useCallback((uploading) => {
        dispatch(setUploading(uploading));
    }, []);

    return {
        materials,
        sizesForSelect,
        margins,
        prices,
        setMaterial,
        setSize,
        findPriceByIDs,
        setMargin,
        deleteAllPhoto,
        setUploadingStatus,
    };
};

export default usePhotoProperties;
