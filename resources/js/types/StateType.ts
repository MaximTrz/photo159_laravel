import PriceType from "./PriceType";
import PhotoType from "./PhotoType";
import SizeType from "./SizeType";
import MaterialType from "./MaterialType";
import OptionslType from "./OptionsType";

import { ERequestStatus } from "./ERequestStatus";

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
    preloading: boolean;
    uploading: boolean;
    status: ERequestStatus;
}
