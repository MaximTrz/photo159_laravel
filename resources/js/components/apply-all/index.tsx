import * as React from "react";
import { useCallback, useEffect } from "react";
import Select from "../select-item";
import Counter from "../counter";
import useApplyAll from "./useApplyAll";
import usePhotoProperties from "../../hooks/usePhotoProperties";

import "./style.scss";

const ApplyAll: React.FC = () => {
    const { materials, margins } = usePhotoProperties();
    const {
        filteredSizes,
        applyAllValues,
        setMaterial,
        setSize,
        setAmount,
        setMargin,
        apply,
    } = useApplyAll();

    useEffect(() => {
        if (filteredSizes.length > 0) {
            setSize(filteredSizes[0].id);
        }
    }, [filteredSizes]);

    const handleSelectMaterial = useCallback(
        (selectedId: number) => {
            setMaterial(selectedId);
        },
        [setMaterial],
    );

    const handleSelectSize = useCallback(
        (selectedId: number) => {
            setSize(selectedId);
        },
        [setSize],
    );

    const handleSelectMargin = useCallback(
        (selectedId: number) => {
            setMargin(selectedId);
        },
        [setMargin],
    );

    const handleClickPlusAmount = useCallback(() => {
        const newValue = applyAllValues.amount + 1;
        setAmount(newValue);
    }, [applyAllValues]);

    const handleClickMinusAmount = useCallback(() => {
        const newValue = applyAllValues.amount - 1;
        setAmount(newValue);
    }, [applyAllValues]);

    return (
        <div className="apply-all">
            <div className="apply-all__title">Применить ко всем:</div>

            <div className="apply-all__input-item">
                <div className="apply-all__input-title">Материал:</div>
                <div className="apply-all__input">
                    <Select
                        options={materials}
                        selected={applyAllValues.material_id}
                        handleSelect={handleSelectMaterial}
                    />
                </div>
            </div>

            <div className="apply-all__input-item">
                <div className="apply-all__input-title">Размер:</div>
                <div className="apply-all__input">
                    <Select
                        options={filteredSizes}
                        handleSelect={handleSelectSize}
                        selected={applyAllValues.size_id}
                    />
                </div>
            </div>

            <div className="apply-all__input-item --mb10">
                <div className="apply-all__input-title">Кол-во:</div>
                <div className="apply-all__input">
                    <Counter
                        amount={applyAllValues.amount}
                        inc={handleClickPlusAmount}
                        dec={handleClickMinusAmount}
                    />
                </div>
            </div>
            <div className="apply-all__input-item --mb20">
                <div className="apply-all__input-title">Поля:</div>
                <div className="apply-all__input">
                    <Select
                        options={margins}
                        handleSelect={handleSelectMargin}
                        selected={applyAllValues.margin_id}
                    />
                </div>
            </div>
            <button
                className="apply-all__aply-button"
                type="button"
                onClick={apply}
            >
                Применить
            </button>
        </div>
    );
};

export default ApplyAll;
