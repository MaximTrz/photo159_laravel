import SizeType from "../../types/SizeType";
import MaterialType from "../../types/MaterialType";
import PriceType from "../../types/PriceType";

const usePriceTableRow = (
    sizes: SizeType[],
    material: MaterialType,
    prices: PriceType,
) => {
    console.log(sizes, material, prices);
};

export default usePriceTableRow;
