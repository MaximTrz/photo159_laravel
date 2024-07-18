import * as React from "react";
import { useCallback } from "react";
import { useRef } from "react";

import "./style.scss";
import useUploadButton from "./useUploadButton";

const UploadButton: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = useCallback(() => {
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
            fileInputRef.current?.click();
        }
    }, []);

    const { addImages } = useUploadButton();

    return (
        <>
            <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={(event) => {
                    addImages(event);
                }}
                style={{ display: "none" }}
            />
            <button
                className="upload-button"
                type="button"
                onClick={handleButtonClick}
            >
                Загрузить
            </button>
        </>
    );
};

export default UploadButton;
