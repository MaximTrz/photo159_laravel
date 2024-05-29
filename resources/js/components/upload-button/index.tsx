import * as React from "react";
import { useRef } from "react";

import "./style.scss";

const UploadButton: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };
    return (
        <>
            <input
                ref={fileInputRef}
                type="file"
                onChange={() => {}}
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
