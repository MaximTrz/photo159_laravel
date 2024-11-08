import PriceType from "./PriceType";
import SizeType from "./SizeType";
import MaterialType from "./MaterialType";
import OptionsType from "./OptionsType";

export interface ServerPriceData {
    prices: PriceType[];
    materials: MaterialType[];
    sizes: SizeType[];
    margins: OptionsType[];
}
