import { useSelector } from "react-redux";
import ToolKitStateType from "../types/ToolKitStateType";

const findPriceByIDs = (materialID: number, sizeID: number) => {
    const prices = useSelector(
        (state: ToolKitStateType) => state.toolkitSlice.prices,
    );
    const result = prices.find(
        (price) => price.material_id === materialID && price.size_id === sizeID,
    );
    return result;
};

export default findPriceByIDs;
