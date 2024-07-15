import { useSelector } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";
import { useMemo } from "react";

import usePhotoProperties from "./usePhotoProperties";

const usePhotos = () => {
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

    return {
        photosList,
        preloading,
        uploading,
        photoUploaded,
        totalPhotosCount,
        totalSum,
    };
};

export default usePhotos;
