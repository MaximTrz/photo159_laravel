import * as React from "react";
import SelectPropsType from "../../types/SelectPropsType";

import "./style.scss";

const Select: React.FC<SelectPropsType> = ({ options, handleSelect }) => {
    const handleSelectChange = (event) => {
        const selectedId = parseInt(event.target.value);
        handleSelect(selectedId);
    };
    return (
        <div className="select-item">
            <select
                className="select-item__select"
                onChange={handleSelectChange}
            >
                {options.map((item) => {
                    return (
                        <option
                            className="select-item__option"
                            key={item.id}
                            value={item.id}
                        >
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
