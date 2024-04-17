import SizeType from "./SizeType";
import MaterialType from "./MaterialType";

export default interface PriceType {
    id: number;
    material_id: number;
    size_id: number;
    price: number;
    size: SizeType;
    material: MaterialType;
}
