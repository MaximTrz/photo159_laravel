import * as React from "react";

import Counter from "../counter";
import PhotoType from "../../types/PhotoType";

import Select from "../select-item";

import "./style.scss";
import usePhotoItem from "./usePhotoItem";

const PhotoItem: React.FC<{ photo: PhotoType }> = ({ photo }) => {
    const { sizesForSelect, materials, margins } = usePhotoItem();

    return (
        <div className="photo-item">
            <div
                className="photo-item__image"
                style={{
                    backgroundImage: `url(images/${photo.image})`,
                }}
            ></div>

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
            <div className="photo-item__select --mb10">
                <div className="photo-item__select-title">Кол-во:</div>
                <div className="photo-item__select-item">
                    <Counter amount={photo.amount} />
                </div>
            </div>
            <div className="photo-item__sum">
                Цена:{" "}
                <span className="photo-item__sum-digit">
                    {photo.price * photo.amount}
                </span>{" "}
                ₽
            </div>
            <div className="photo-item__select --mb10">
                <div className="photo-item__select-title">Поля:</div>
                <div className="photo-item__select-item">
                    <Select options={margins} />
                </div>
            </div>

            <div className="photo-item__del">Удалить фото</div>
        </div>
    );
};

export default PhotoItem;
