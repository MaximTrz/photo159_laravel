import * as React from "react";
import { useSelector } from "react-redux";
import ToolKitStateType from "../../types/ToolKitStateType";

import findPrice from "../../utils/findPrice";

const usePhtotoItem = () => {
    const sizes = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.sizes,
    );
    const materials = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.materials,
    );
    const prices = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.prices,
    );
    const getPrice = React.useCallback((sizeId: number, materialId: number) => {
        const size = sizes.find((size) => size.id === sizeId);
        const material = materials.find(
            (material) => material.id === materialId,
        );
        if (size && material) {
            const price = findPrice(size, material, prices);
            return price;
        }
        return 0;
    }, []);

    const setMaterial = React.useCallback((photoId: number) => {
        console.log(photoId);
    }, []);
    const setSize = React.useCallback(() => {}, []);

    return {
        getPrice,
        setMaterial,
        setSize,
    };
};

export default usePhtotoItem;
