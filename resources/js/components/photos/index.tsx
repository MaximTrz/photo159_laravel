import * as React from "react";
import usePhotos from "./usePhotos";
import PhotosList from "../photos-list";
import ApplyAll from "../apply-all";
import DeleteAll from "../delete-all";
import CheckoutButton from "../checkout-button";

import "./style.scss";

const Photos: React.FC = () => {
    const { photosList } = usePhotos();
    return (
        <div className="photos">
            <div className="photos__header">
                <div className="photos__header-text">
                    <div className="photos__header-count">
                        Количество фотографий: 1шт.
                    </div>
                    <div className="photos__header-sum">Сумма: 10 ₽</div>
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
                    <PhotosList photos={photosList} />
                </div>

                <div className="photos__apply-all">
                    <ApplyAll />
                </div>
            </div>

            <div className="photos__footer">
                <div className="photos__header-delete-button">
                    <DeleteAll />
                </div>
                <div className="photos__header-checkout-button">
                    <CheckoutButton />
                </div>
            </div>
        </div>
    );
};

export default Photos;
