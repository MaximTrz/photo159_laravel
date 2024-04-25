import SizeType from "./SizeType";
import MaterialType from "./MaterialType";
import PriceType from "./PriceType";

export default interface TablePricePropsType {
    title: string;
    sizes: SizeType[];
    materials: MaterialType[];
    prices: PriceType[];
}
