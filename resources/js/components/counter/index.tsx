import * as React from "react";
import CounterPropsType from "../../types/CounterPropsType";
import "./style.scss";

const Counter: React.FC<CounterPropsType> = ({ amount }) => {
    return (
        <div className="counter">
            <label className="counter__label">Кол-во:</label>
            <div className="counter__buttons">
                <button className="counter__buttons">+</button>
                <input className="counter__input" type="text" value={amount} />
                <button className="counter__buttons">-</button>
            </div>
        </div>
    );
};

export default Counter;
