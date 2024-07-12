import { useSelector } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";

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

    return { photosList, preloading, uploading };
};

export default usePhotos;
