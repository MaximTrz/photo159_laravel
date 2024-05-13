import { useSelector } from "react-redux";

import ToolKitStateType from "../../types/ToolKitStateType";

const useApplyAll = () => {
    const sizes = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.photos,
    );
    return { sizes };
};

export default useApplyAll;
