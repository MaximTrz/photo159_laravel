import SizeType from "./SizeType";
import PriceType from "./PriceType";
import MaterialType from "./MaterialType";

export default interface PriceTableRowPorpsType {
    sizes: SizeType[];
    material: MaterialType;
    prices: PriceType[];
}
