import * as React from "react";
import UploadButton from "../upload-button";

import "./style.scss";

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header__logo"></div>
            <div className="header__upload">
                <UploadButton />
            </div>
        </div>
    );
};

export default Header;
