import * as React from "react";
import usePhotos from "./usePhotos";
import PhotosList from "../photos-list";
import ApplyAll from "../apply-all";

const Photos: React.FC = () => {
    const { photosList } = usePhotos();
    return (
        <div className="photos">
            <div className="photos__header"></div>

            <div className="photos__wrapper">
                <div className="photos__list">
                    <PhotosList photos={photosList} />
                </div>

                <div className="photos__apply-all">
                    <ApplyAll />
                </div>
            </div>

            <div className="photos__footer"></div>
        </div>
    );
};

export default Photos;
