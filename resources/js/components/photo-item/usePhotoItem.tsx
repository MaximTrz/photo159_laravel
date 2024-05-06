import { useSelector } from "react-redux";
import ToolKitStateType from "../../types/ToolKitStateType";

const usePhotoItem = () => {
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
    return { materials, sizesForSelect };
};

export default usePhotoItem;