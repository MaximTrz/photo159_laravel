import { useDispatch } from "react-redux";

import { deletePhoto } from "../../store/Reducer";

const usePhtotoItem = () => {
    const dispatch = useDispatch();

    const deletePhtotoById = (id: number) => {
        dispatch(deletePhoto({ id }));
    };

    return {
        deletePhtotoById,
    };
};

export default usePhtotoItem;
