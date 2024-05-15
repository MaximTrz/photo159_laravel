import * as React from "react";
import Select from "../select-item";
import Counter from "../counter";
import usePhotoProperties from "../../hooks/usePhotoProperties";

import "./style.scss";

const ApplyAll: React.FC = () => {
    const { sizesForSelect, materials, margins } = usePhotoProperties();
    return (
        <div className="apply-all">
            <div className="apply-all__title">Применить ко всем:</div>
            <div className="apply-all__input-item">
                <div className="apply-all__input-title">Размер:</div>
                <div className="apply-all__input">
                    <Select options={sizesForSelect} />
                </div>
            </div>
            <div className="apply-all__input-item">
                <div className="apply-all__input-title">Материал:</div>
                <div className="apply-all__input">
                    <Select options={materials} />
                </div>
            </div>
            <div className="apply-all__input-item --mb10">
                <div className="apply-all__input-title">Кол-во:</div>
                <div className="apply-all__input">
                    <Counter amount={1} />
                </div>
            </div>
            <div className="apply-all__input-item --mb20">
                <div className="apply-all__input-title">Поля:</div>
                <div className="apply-all__input">
                    <Select options={margins} />
                </div>
            </div>
            <button className="apply-all__aply-button" type="button">
                Применить
            </button>
        </div>
    );
};

export default ApplyAll;
