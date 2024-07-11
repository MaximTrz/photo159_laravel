import PriceType from "./PriceType";
import PhotoType from "./PhotoType";
import SizeType from "./SizeType";
import MaterialType from "./MaterialType";
import OptionslType from "./OptionsType";

export default interface StateType {
    prices: PriceType[];
    materials: MaterialType[];
    sizes: SizeType[];
    photos: PhotoType[];
    margins: OptionslType[];
    lastID: number;
    aplyAll: {
        size_id: number;
        material_id: number;
        amount: number;
        margin_id: number;
    };
    loaded: boolean;
    preloading: boolean;
    uploading: {
        show: false;
        uploaded: number;
    };
}
