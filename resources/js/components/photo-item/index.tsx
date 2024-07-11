import * as React from "react";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

import { setAmount } from "../../store/Reducer";

import Counter from "../counter";
import PhotoType from "../../types/PhotoType";

import Select from "../select-item";
import usePhotoProperties from "../../hooks/usePhotoProperties";
import usePhtotoItem from "./usePhtotoItem";

import "./style.scss";

const PhotoItem: React.FC<{ photo: PhotoType }> = ({ photo }) => {
    const dispatch = useDispatch();

    const {
        sizesForSelect,
        materials,
        margins,
        prices,
        setMaterial,
        setSize,
        findPriceByIDs,
        setMargin,
    } = usePhotoProperties();
    const { deletePhtotoById } = usePhtotoItem();

    const filteredSizes = useMemo(() => {
        return sizesForSelect.filter((size) => {
            const price = prices.find(
                (price) =>
                    price.size_id === size.id &&
                    price.material_id === photo.material_id,
            );
            if (price) {
                return size;
            }
        });
    }, [sizesForSelect, prices, photo.material_id]);

    const handleClickPlusAmount = useCallback(() => {
        const newValue = photo.amount + 1;
        dispatch(setAmount({ id: photo.id, amount: newValue }));
    }, [photo]);

    const handleClickMinusAmount = useCallback(() => {
        const newValue = photo.amount - 1;
        dispatch(setAmount({ id: photo.id, amount: newValue }));
    }, [photo]);

    const handleSelectMaterial = useCallback(
        (selectedId: number) => {
            setMaterial(photo, selectedId);
        },
        [photo, setMaterial],
    );

    const handleSelectSize = useCallback(
        (selectedId: number) => {
            setSize(photo, selectedId);
        },
        [photo, setSize],
    );

    const handleSelectMargin = useCallback(
        (selectedId: number) => {
            setMargin(photo.id, selectedId);
        },
        [photo, setMargin],
    );

    const totalPrice = useMemo(() => {
        return (
            Number(findPriceByIDs(photo.material_id, photo.size_id)?.price) *
            photo.amount
        );
    }, [
        photo.material_id,
        photo.size_id,
        photo.amount,
        findPriceByIDs,
        filteredSizes,
    ]);

    return (
        <div className="photo-item">
            <div
                className="photo-item__image"
                style={{
                    backgroundImage: `url(${photo.image})`,
                }}
            ></div>

            <div className="photo-item__selects">
                <div className="photo-item__select">
                    <div className="photo-item__select-title">Материал:</div>
                    <div className="photo-item__select-item">
                        <Select
                            options={materials}
                            selected={photo.material_id}
                            handleSelect={handleSelectMaterial}
                        />
                    </div>
                </div>
                <div className="photo-item__select">
                    <div className="photo-item__select-title">Размер:</div>
                    <div className="photo-item__select-item">
                        <Select
                            options={filteredSizes}
                            selected={photo.size_id}
                            handleSelect={handleSelectSize}
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
                    <span className="photo-item__sum-digit">{totalPrice}</span>{" "}
                    ₽
                </div>
                <div className="photo-item__select --mb10">
                    <div className="photo-item__select-title">Поля:</div>
                    <div className="photo-item__select-item">
                        <Select
                            options={margins}
                            selected={photo.margin_id}
                            handleSelect={handleSelectMargin}
                        />
                    </div>
                </div>
                <div
                    className="photo-item__del"
                    onClick={() => {
                        deletePhtotoById(photo.id);
                    }}
                >
                    Удалить фото
                </div>
            </div>
        </div>
    );
};

export default PhotoItem;
