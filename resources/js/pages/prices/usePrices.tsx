import { useMemo } from "react";
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

    const baseSizes = useMemo(
        () => sizes.filter((size) => size.size_type_id === 1),
        [sizes],
    );

    const souvenirSizes = useMemo(
        () => sizes.filter((size) => size.size_type_id === 2),
        [sizes],
    );

    const baseMaterials = useMemo(
        () => materials.filter((material) => material.material_type_id === 1),
        [materials],
    );

    const souvenirMaterials = useMemo(
        () => materials.filter((material) => material.material_type_id === 2),
        [materials],
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
