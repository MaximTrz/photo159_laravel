import * as React from "react";
import PhotoType from "../../types/PhotoType";
import PhotoItem from "../photo-item";
import "./style.scss";

const PhotosList: React.FC<{ photos: PhotoType[] }> = ({ photos }) => {
    return (
        <div className="photos-list">
            {photos.map((photo) => (
                <div className="photos-list__item" key={photo.id}>
                    <PhotoItem photo={photo} />
                </div>
            ))}
        </div>
    );
};

export default PhotosList;
