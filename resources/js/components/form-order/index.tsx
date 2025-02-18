import * as React from "react";

import { useState } from "react";

import useSendOrder from "../../hooks/useSendOrder";
import usePhotos from "../../hooks/usePhotos";

import Checkbox from "@mui/material/Checkbox";

import classNames from "classnames";

import "./style.scss";

export interface IOrderData {
    first_name: string;
    surname: string;
    email: string;
    tel: string;
    delivery_method: number;
    pay_method: number;
    comment: string;
}

const FormOrder: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [orderData, setOrderData] = useState<IOrderData>({
        first_name: "",
        surname: "",
        email: "",
        tel: "",
        delivery_method: 1,
        pay_method: 1,
        comment: "",
    });

    const [errors, setErrors] = useState<{
        [key in keyof IOrderData]?: boolean;
    }>({});

    const validateFields = (): boolean => {
        const newErrors: { [key in keyof IOrderData]?: boolean } = {};
        if (!(orderData.first_name.length > 0)) newErrors.first_name = true;
        if (!(orderData.surname.length > 0)) newErrors.surname = true;
        if (!orderData.email) newErrors.email = true;
        if (!orderData.tel) newErrors.tel = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChangeInput = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;
        setOrderData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
    };

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setOrderData({
            ...orderData,
            [event.target.name]: Number(event.target.value),
        });
    };

    const { sendOrder } = useSendOrder();

    const { totalPhotosCount, totalSum } = usePhotos();

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setChecked(event.target.checked);
    };

    const handleSubmit = () => {
        console.log(validateFields());
        if (validateFields() && checked) {
            sendOrder(orderData);
        }
    };

    return (
        <div className="form-order">
            <label className="form-order__label">
                <span className="form-order__field-title">
                    Количество фото:
                </span>
                <span className="form-order__span-value">
                    {totalPhotosCount}
                    <span className="form-order__span-unit">шт.</span>
                </span>
            </label>
            <label className="form-order__label">
                <span className="form-order__field-title">Итого:</span>
                <span className="form-order__span-value">
                    {totalSum}
                    <span className="form-order__span-unit">₽</span>
                </span>
            </label>
            <label className="form-order__label">
                <span className="form-order__field-title">Фамилия:</span>
                <input
                    className={classNames({
                        "form-order__input": true,
                        "--error": errors.surname,
                    })}
                    name="surname"
                    type="text"
                    onChange={handleChangeInput}
                />
            </label>
            <label className="form-order__label">
                <span className="form-order__field-title">Имя:</span>
                <input
                    className={classNames({
                        "form-order__input": true,
                        "--error": errors.first_name,
                    })}
                    type="text"
                    name="first_name"
                    onChange={handleChangeInput}
                />
            </label>
            <label className="form-order__label">
                <span className="form-order__field-title">Email:</span>
                <input
                    className={classNames({
                        "form-order__input": true,
                        "--error": errors.email,
                    })}
                    name="email"
                    onChange={handleChangeInput}
                    type="text"
                />
            </label>
            <label className="form-order__label">
                <span className="form-order__field-title">Телефон:</span>
                <input
                    className={classNames({
                        "form-order__input": true,
                        "--error": errors.tel,
                    })}
                    type="text"
                    name="tel"
                    onChange={handleChangeInput}
                />
            </label>
            <label className="form-order__label" htmlFor="delivery-method">
                <span className="form-order__field-title">
                    Способ доставки:
                </span>
                <select
                    className="form-order__input"
                    name="delivery_method"
                    onChange={handleSelectChange}
                    value={orderData.delivery_method}
                >
                    <option value="1">
                        {`самовывоз "ТЦ Киттарский" (ул.Карла Маркса 27В)`}
                    </option>
                    <option value="2">
                        {`самовывоз "Мечта" (ул.Гоголя 24)`}
                    </option>
                </select>
            </label>

            <label className="form-order__label" htmlFor="pay-method">
                <span className="form-order__field-title">Способ оплаты:</span>
                <select
                    name="pay_method"
                    onChange={handleSelectChange}
                    className="form-order__input"
                    value={orderData.pay_method}
                >
                    <option value="1">{`Перевод на карту Сбербанка`}</option>
                    <option value="2">{`Оплата при получении`}</option>
                </select>
            </label>

            <label className="form-order__label" htmlFor="delivery-method">
                <span className="form-order__field-title">Комментарий:</span>
                <textarea
                    name="comment"
                    onChange={handleChangeInput}
                    className="form-order__input"
                    rows={4}
                    cols={50}
                ></textarea>
            </label>
            <div className="form-order__personal-date">
                <Checkbox checked={checked} onChange={handleCheckboxChange} />
                <div className="form-order__personal-date-text">
                    Нажимая кнопку «Оформить», я даю свое согласие на обработку
                    моих персональных данных, в соответствии с Федеральным
                    законом от 27.07.2006 года №152-ФЗ «О персональных данных»,
                    на условиях и для целей, определенных в Согласии на
                    обработку персональных данных
                </div>
            </div>
            <div className="form-order__button-wrapper">
                <button
                    disabled={!checked}
                    onClick={handleSubmit}
                    className="form-order__button"
                >
                    Оформить
                </button>
            </div>
        </div>
    );
};

export default FormOrder;
