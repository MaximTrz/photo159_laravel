import { useSelector } from "react-redux";
import ToolKitStateType from "../../types/ToolKitStateType";

const usePrices = () => {
    const sizes = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.sizes,
    );
    const materials = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.materials,
    );
    const prices = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.prices,
    );

    const baseSizes = sizes.filter((size) => size.size_type_id === 1);
    const souvenirSizes = sizes.filter((size) => size.size_type_id === 2);

    const baseMaterials = materials.filter(
        (material) => material.material_type_id === 1,
    );

    const souvenirMaterials = materials.filter(
        (material) => material.material_type_id === 2,
    );

    return {
        baseSizes,
        souvenirSizes,
        baseMaterials,
        souvenirMaterials,
        prices,
    };
};

export default usePrices;
