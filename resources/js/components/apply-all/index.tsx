import * as React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import Select from "../select-item";
import Counter from "../counter";
import useApplyAll from "./useApplyAll";
import usePhotoProperties from "../../hooks/usePhotoProperties";

import "./style.scss";

const ApplyAll: React.FC = () => {
    const { sizesForSelect, materials, margins, prices } = usePhotoProperties();
    const { applyAllValues, setMaterial, setSize, apply } = useApplyAll();

    const filteredSizes = useMemo(() => {
        return sizesForSelect.filter((size) => {
            const price = prices.find(
                (price) =>
                    price.size_id === size.id &&
                    price.material_id === applyAllValues.material_id,
            );
            if (price) {
                return size;
            }
        });
    }, [sizesForSelect, prices, applyAllValues.material_id]);

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
                    <Counter amount={1} />
                </div>
            </div>
            <div className="apply-all__input-item --mb20">
                <div className="apply-all__input-title">Поля:</div>
                <div className="apply-all__input">
                    <Select options={margins} />
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
