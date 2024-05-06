import * as React from "react";

import Counter from "../counter";
import PhotoType from "../../types/PhotoType";

import Select from "../select-item";

import "./style.scss";
import usePhotoItem from "./usePhotoItem";

const PhotoItem: React.FC<{ photo: PhotoType }> = ({ photo }) => {
    const { sizesForSelect, materials } = usePhotoItem();

    return (
        <div className="photo-item">
            <img src={photo.image} className="photo-item__image" alt="Фото" />
            <div className="photo-item__size">
                <Select title="Размер" options={sizesForSelect} />
            </div>
            <div className="photo-item__material">
                <Select title="Материал" options={materials} />
            </div>
            <div className="photo-item__amount">
                <Counter amount={photo.amount} />
            </div>
            <div className="photo-item__sum">{photo.price * photo.amount}</div>
        </div>
    );
};

export default PhotoItem;
