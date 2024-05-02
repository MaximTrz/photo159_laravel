import PriceType from "./PriceType";
import PhotoType from "./PhotoType";
import SizeType from "./SizeType";
import MaterialType from "./MaterialType";

export default interface StateType {
    prices: PriceType[];
    materials: MaterialType[];
    sizes: SizeType[];
    photos: PhotoType[];
}
