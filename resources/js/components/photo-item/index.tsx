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
            <div className="photo-item__select">
                <div className="photo-item__select-title">Размер:</div>
                <div className="photo-item__select-item">
                    <Select options={sizesForSelect} />
                </div>
            </div>
            <div className="photo-item__select">
                <div className="photo-item__select-title">Материал:</div>
                <div className="photo-item__select-item">
                    <Select options={materials} />
                </div>
            </div>
            <div className="photo-item__select">
                <div className="photo-item__select-title">Кол-во:</div>
                <div className="photo-item__select-item">
                    <Counter amount={photo.amount} />
                </div>
            </div>
            <div className="photo-item__sum">
                Цена: {photo.price * photo.amount} ₽
            </div>
        </div>
    );
};

export default PhotoItem;
