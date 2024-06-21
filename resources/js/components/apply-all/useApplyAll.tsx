import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import ToolKitStateType from "../../types/ToolKitStateType";
import {
    setApplyAllMaterial,
    setApplyAllSize,
    applyAll,
} from "../../store/Reducer";

const useApplyAll = () => {
    const dispatch = useDispatch();
    const applyAllValues = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.aplyAll,
    );

    const setMaterial = useCallback(
        (materialID: number) => {
            dispatch(setApplyAllMaterial({ matetialId: materialID }));
        },
        [dispatch],
    );

    const setSize = useCallback(
        (sizeID: number) => {
            dispatch(
                setApplyAllSize({
                    sizeId: sizeID,
                }),
            );
        },
        [dispatch],
    );

    const apply = () => dispatch(applyAll());

    return { applyAllValues, setMaterial, setSize, apply };
};

export default useApplyAll;
