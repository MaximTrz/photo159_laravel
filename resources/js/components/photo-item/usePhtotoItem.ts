import * as React from "react";
import { useDispatch } from "react-redux";

import { setPhotoMargin, deletePhoto } from "../../store/Reducer";

const usePhtotoItem = () => {
    const dispatch = useDispatch();

    const setMargin = React.useCallback(
        (photoId: number, margin_id: number) => {
            dispatch(setPhotoMargin({ id: photoId, marginId: margin_id }));
        },
        [],
    );

    const deletePhtotoById = (id: number) => {
        dispatch(deletePhoto({ id }));
    };

    return {
        setMargin,
        deletePhtotoById,
    };
};

export default usePhtotoItem;
