import * as React from "react";
import CounterPropsType from "../../types/CounterPropsType";
import "./style.scss";

const Counter: React.FC<CounterPropsType> = ({ amount, inc, dec }) => {
    return (
        <div className="counter">
            <div className="counter__buttons">
                <button onClick={dec} className="counter__button">
                    -
                </button>
                <input
                    className="counter__input"
                    type="text"
                    value={amount}
                    readOnly
                />
                <button onClick={inc} className="counter__button">
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;
