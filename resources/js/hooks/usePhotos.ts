import { useSelector } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";

const usePhotos = () => {
    const photosList = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.photos,
    );
    return { photosList };
};

export default usePhotos;
