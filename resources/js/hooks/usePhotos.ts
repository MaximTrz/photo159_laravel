import { useSelector, useDispatch } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";
import { useMemo } from "react";

import usePhotoProperties from "./usePhotoProperties";

import { setOrderID } from "../store/Reducer";

const usePhotos = () => {
    const dispatch = useDispatch();

    const { findPriceByIDs } = usePhotoProperties();

    const photosList = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.photos,
    );

    const preloading = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.preloading,
    );

    const uploading = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.uploading,
    );

    const orderID = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.orderID,
    );

    const photoUploaded = useMemo(() => {
        return photosList.filter((photo) => photo.uploaded).length;
    }, [photosList]);

    const totalPhotosCount = useMemo(() => {
        return photosList.reduce((total, photo) => total + photo.amount, 0);
    }, [photosList]);

    const totalSum = useMemo(() => {
        return photosList.reduce((total, photo) => {
            const pricePhoto = findPriceByIDs(
                photo.material_id,
                photo.size_id,
            )?.price;
            const sum = pricePhoto * photo.amount;
            return total + sum;
        }, 0);
    }, [photosList]);

    const setOrder = (orderID: number) => {
        dispatch(setOrderID(orderID));
    };

    return {
        photosList,
        preloading,
        uploading,
        photoUploaded,
        totalPhotosCount,
        totalSum,
        orderID,
        setOrder,
    };
};

export default usePhotos;
