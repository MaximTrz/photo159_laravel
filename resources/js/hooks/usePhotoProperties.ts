import * as React from "react";
import { useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";

import {
    setPhotoMaterial,
    setPhotoSize,
    setPhotoMargin,
} from "../store/Reducer";

import PhotoType from "../types/PhotoType";

const usePhotoProperties = () => {
    const dispatch = useDispatch();

    const photos = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.photos,
    );

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

    const findPriceByIDs = React.useCallback(
        (materialID: number, sizeID: number) => {
            const result = prices.find(
                (price) =>
                    price.material_id === materialID &&
                    price.size_id === sizeID,
            );
            return result;
        },
        [prices],
    );

    const setMaterial = React.useCallback(
        (photo: PhotoType, materialID: number) => {
            const price = findPriceByIDs(materialID, photo.size_id);

            if (price) {
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
        [dispatch, findPriceByIDs, prices],
    );

    const setSize = React.useCallback(
        (photo: PhotoType, sizeID: number) => {
            const price = findPriceByIDs(photo.material_id, sizeID);

            if (price) {
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
        [dispatch, findPriceByIDs, prices],
    );
    const setMargin = React.useCallback(
        (photoId: number, margin_id: number) => {
            dispatch(setPhotoMargin({ id: photoId, marginId: margin_id }));
        },
        [],
    );

    const totalPhotosCount = useMemo(() => {
        return photos.reduce((total, photo) => total + photo.amount, 0);
    }, [photos]);

    const totalSum = useMemo(() => {
        return photos.reduce((total, photo) => {
            const pricePhoto =
                findPriceByIDs(photo.material_id, photo.size_id)?.price || 0;
            const sum = pricePhoto * photo.amount;
            return total + sum;
        }, 0);
    }, [photos, findPriceByIDs, prices]);

    return {
        materials,
        sizesForSelect,
        margins,
        prices,
        totalPhotosCount,
        totalSum,
        setMaterial,
        setSize,
        findPriceByIDs,
        setMargin,
    };
};

export default usePhotoProperties;
