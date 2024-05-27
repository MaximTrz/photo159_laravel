import * as React from "react";
import { useDispatch } from "react-redux";

import { setAmount } from "../../store/Reducer";

import Counter from "../counter";
import PhotoType from "../../types/PhotoType";

import Select from "../select-item";
import usePhotoProperties from "../../hooks/usePhotoProperties";
import usePhtotoItem from "./usePhtotoItem";

import "./style.scss";

const PhotoItem: React.FC<{ photo: PhotoType }> = ({ photo }) => {
    const { sizesForSelect, materials, margins, prices } = usePhotoProperties();
    const { getPrice, setMaterial } = usePhtotoItem();

    const filteredMaterials = materials.filter((material) => {
        const price = prices.find(
            (price) =>
                price.material_id === material.id &&
                price.size_id === photo.size_id,
        );
        if (price) {
            return material;
        }
    });

    const dispatch = useDispatch();

    const handleClickPlusAmount = () => {
        const newValue = photo.amount + 1;
        dispatch(setAmount({ id: photo.id, amount: newValue }));
    };

    const handleClickMinusAmount = () => {
        const newValue = photo.amount - 1;
        dispatch(setAmount({ id: photo.id, amount: newValue }));
    };

    const handleSelectMaterial = (selectedId: number) => {
        setMaterial(photo.id, selectedId);
    };

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
                    <Select
                        options={sizesForSelect}
                        handleSelect={handleSelectMaterial}
                    />
                </div>
            </div>
            <div className="photo-item__select">
                <div className="photo-item__select-title">Материал:</div>
                <div className="photo-item__select-item">
                    <Select
                        options={filteredMaterials}
                        handleSelect={handleSelectMaterial}
                    />
                </div>
            </div>
            <div className="photo-item__select --mb10">
                <div className="photo-item__select-title">Кол-во:</div>
                <div className="photo-item__select-item">
                    <Counter
                        amount={photo.amount}
                        inc={handleClickPlusAmount}
                        dec={handleClickMinusAmount}
                    />
                </div>
            </div>
            <div className="photo-item__sum">
                Цена:{" "}
                <span className="photo-item__sum-digit">
                    {Number(getPrice(photo.size_id, photo.material_id)) *
                        photo.amount}
                </span>{" "}
                ₽
            </div>
            <div className="photo-item__select --mb10">
                <div className="photo-item__select-title">Поля:</div>
                <div className="photo-item__select-item">
                    <Select
                        options={margins}
                        handleSelect={handleSelectMaterial}
                    />
                </div>
            </div>

            <div className="photo-item__del">Удалить фото</div>
        </div>
    );
};

export default PhotoItem;
