import { useDispatch } from "react-redux";

import { deleteAll } from "../../store/Reducer";

const useDeleteAll = () => {
    const dispatch = useDispatch();
    const deleteAllPhoto = () => {
        dispatch(deleteAll());
    };
    return { deleteAllPhoto };
};

export default useDeleteAll;
