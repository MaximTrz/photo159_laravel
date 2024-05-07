import * as React from "react";
import CounterPropsType from "../../types/CounterPropsType";
import "./style.scss";

const Counter: React.FC<CounterPropsType> = ({ amount }) => {
    return (
        <div className="counter">
            <div className="counter__buttons">
                <button className="counter__button">-</button>
                <input
                    className="counter__input"
                    type="text"
                    value={amount}
                    readOnly
                />
                <button className="counter__button">+</button>
            </div>
        </div>
    );
};

export default Counter;
