import * as React from "react";

import Counter from "../counter";
import PhotoType from "../../types/PhotoType";

import "./style.scss";

const PhotoItem: React.FC<{ photo: PhotoType }> = ({ photo }) => {
    return (
        <div className="photo-item">
            <img src={photo.image} className="photo-item__image" alt="Фото" />
            <div className="photo-item__amount">
                <Counter amount={photo.amount} />
            </div>
            <div className="photo-item__sum">{photo.price * photo.amount}</div>
        </div>
    );
};

export default PhotoItem;
