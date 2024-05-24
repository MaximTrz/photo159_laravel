import SizeType from "../types/SizeType";
import MaterialType from "../types/MaterialType";
import PriceType from "../types/PriceType";

const findPrice = (
    size: SizeType,
    material: MaterialType,
    prices: PriceType[],
) => {
    const price = prices.find(
        (item) => item.size.id === size.id && item.material.id === material.id,
    );
    const result = price ? price.price : "-";
    return result;
};

export default findPrice;
