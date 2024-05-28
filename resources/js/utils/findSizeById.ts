import { useSelector } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";

const findSizeById = (id: number) => {
    const sizes = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.sizes,
    );
    const result = sizes.find((size) => size.id === id);
    return result;
};

export default findSizeById;
