import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import usePhotoProperties from "../../hooks/usePhotoProperties";

import ToolKitStateType from "../../types/ToolKitStateType";
import {
    setApplyAllMaterial,
    setApplyAllSize,
    setApplyAllAmount,
    setApplyAllMargin,
    applyAll,
} from "../../store/Reducer";

const useApplyAll = () => {
    const dispatch = useDispatch();
    const applyAllValues = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.aplyAll,
    );
    const { sizesForSelect, prices } = usePhotoProperties();

    const filteredSizes = useMemo(() => {
        return sizesForSelect.filter((size) => {
            const price = prices.find(
                (price) =>
                    price.size_id === size.id &&
                    price.material_id === applyAllValues.material_id,
            );
            if (price) {
                return size;
            }
        });
    }, [sizesForSelect, prices, applyAllValues.material_id]);

    const setMaterial = useCallback((materialID: number) => {
        dispatch(setApplyAllMaterial({ matetialId: materialID }));
    }, []);

    const setSize = useCallback((sizeID: number) => {
        dispatch(
            setApplyAllSize({
                sizeId: sizeID,
            }),
        );
    }, []);

    const setAmount = useCallback(
        (value) => {
            dispatch(setApplyAllAmount({ amount: value }));
        },
        [applyAllValues],
    );

    const setMargin = useCallback(
        (marginID: number) => {
            dispatch(
                setApplyAllMargin({
                    marginId: marginID,
                }),
            );
        },
        [applyAllValues],
    );

    const apply = () => dispatch(applyAll());

    return {
        applyAllValues,
        setMaterial,
        setSize,
        setAmount,
        setMargin,
        apply,
        filteredSizes,
    };
};

export default useApplyAll;
