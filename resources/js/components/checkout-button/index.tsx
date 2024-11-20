import * as React from "react";
import "./style.scss";

interface CheckoutButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>; // Определение типа для onClick
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ onClick }) => {
    // Деструктуризуем props
    return (
        <button onClick={onClick} className="checkout-button">
            К оформлению
        </button>
    );
};

export default CheckoutButton;
