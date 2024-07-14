import { useSelector } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";
import { useMemo } from "react";

const usePhotos = () => {
    const photosList = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.photos,
    );

    const preloading = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.preloading,
    );

    const uploading = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.uploading,
    );

    const memoizedValues = useMemo(
        () => ({
            photosList,
            preloading,
            uploading,
        }),
        [photosList, preloading, uploading],
    );

    return memoizedValues;
};

export default usePhotos;
