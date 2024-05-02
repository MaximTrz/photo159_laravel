import * as React from "react";

import PhotoType from "../../types/PhotoType";

import "./style.scss";

const PhotoItem: React.FC<PhotoType> = (photo) => {
    return (
        <div className="photo-item">
            <img src={photo.image} alt="Фото" />
            <div className="photo-item__sum">{photo.sum}</div>
        </div>
    );
};

export default PhotoItem;
