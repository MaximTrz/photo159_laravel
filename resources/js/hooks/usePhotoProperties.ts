import { useSelector, useDispatch } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";

import { setPhotoMaterial, setPhotoSize } from "../store/Reducer";

import PhotoType from "../types/PhotoType";

const usePhotoProperties = () => {
    const dispatch = useDispatch();

    const sizes = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.sizes,
    );

    const sizesForSelect = sizes.map((size) => ({
        ...size,
        name: `${size.width} X ${size.height} (${size.comment})`,
    }));

    const materials = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.materials,
    );
    const margins = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.margins,
    );

    const prices = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.prices,
    );

    const findPriceByIDs = (materialID: number, sizeID: number) => {
        const result = prices.find(
            (price) =>
                price.material_id === materialID && price.size_id === sizeID,
        );
        return result;
    };

    const findMaterialById = (id: number) => {
        const materials = useSelector(
            (state: ToolKitStateType) => state.toolkitSlice.materials,
        );
        const result = materials.find((material) => material.id === id);
        return result;
    };

    const findSizeById = (id: number) => {
        const sizes = useSelector(
            (state: ToolKitStateType) => state.toolkitSlice.sizes,
        );
        const result = sizes.find((size) => size.id === id);
        return result;
    };

    const setMaterial = (photo: PhotoType, materialID: number) => {
        const price = findPriceByIDs(materialID, photo.size_id);

        if (price) {
            dispatch(
                setPhotoMaterial({ id: photo.id, materialId: materialID }),
            );
        } else {
            const correctPrice = prices.find((price) => {
                return price.material_id === materialID;
            });

            if (correctPrice) {
                dispatch(
                    setPhotoMaterial({
                        id: photo.id,
                        materialId: correctPrice.material_id,
                    }),
                );
                dispatch(
                    setPhotoSize({
                        id: photo.id,
                        sizeId: correctPrice.size_id,
                    }),
                );
            }
        }
    };

    return { materials, sizesForSelect, margins, prices, setMaterial };
};

export default usePhotoProperties;
