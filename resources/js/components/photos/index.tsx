import * as React from "react";
import { useMemo } from "react";
import usePhotos from "../../hooks/usePhotos";
import usePhotoProperties from "../../hooks/usePhotoProperties";
import PhotoItem from "../photo-item";
import ApplyAll from "../apply-all";
import DeleteAll from "../delete-all";
import CheckoutButton from "../checkout-button";

import "./style.scss";

const Photos: React.FC = () => {
    const { photosList } = usePhotos();
    const { totalPhotosCount, totalSum } = usePhotoProperties();

    const memoizedPhotosList = useMemo(() => photosList, [photosList]);

    return (
        <div className="photos">
            <div className="photos__header">
                <div className="photos__header-text">
                    <div className="photos__header-count">
                        Количество фотографий: {totalPhotosCount} шт.
                    </div>
                    <div className="photos__header-sum">
                        Сумма: {totalSum} ₽
                    </div>
                </div>
                <div className="photos__header-buttons">
                    <div className="photos__header-delete-button">
                        <DeleteAll />
                    </div>
                    <div className="photos__header-checkout-button">
                        <CheckoutButton />
                    </div>
                </div>
            </div>

            <div className="photos__wrapper">
                <div className="photos__items">
                    {memoizedPhotosList.map((photo) => (
                        <div className="photos__item" key={photo.id}>
                            <PhotoItem photo={photo} />
                        </div>
                    ))}
                </div>

                <div className="photos__apply-all">
                    <ApplyAll />
                </div>
            </div>

            <div className="photos__footer">
                <div className="photos__footer-buttons">
                    <div className="photos__footer-delete-button">
                        <DeleteAll />
                    </div>
                    <div className="photos__footer-checkout-button">
                        <CheckoutButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;
