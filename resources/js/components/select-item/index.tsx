import * as React from "react";
import SelectPropsType from "../../types/SelectPropsType";

import "./style.scss";

const Select: React.FC<SelectPropsType> = ({ title, options }) => {
    return (
        <div className="select-item">
            <label className="select-item__label">{`${title}:`}</label>
            <select className="select-item__select">
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
