import { useSelector } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";

const findMaterialById = (id: number) => {
    const materials = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.materials,
    );
    const result = materials.find((material) => material.id === id);
    return result;
};

export default findMaterialById;
