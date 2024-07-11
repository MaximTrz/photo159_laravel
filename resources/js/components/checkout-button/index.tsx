import * as React from "react";
import useSendOrder from "../../hooks/useSendOrder";
import "./style.scss";

const CheckoutButton: React.FC = () => {
    const { sendOrder } = useSendOrder();

    return (
        <button onClick={sendOrder} className="checkout-button">
            Оформить заказ
        </button>
    );
};

export default CheckoutButton;
