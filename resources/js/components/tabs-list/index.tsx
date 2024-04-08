import * as React from "react";

import "./style.scss";

const TabsList: React.FC = () => {
    return (
        <ul className="tabs-list">
            <li className="tabs-list__item">
                <a href="#tab1" className="tabs-list__link">
                    Главная
                </a>
            </li>
            <li className="tabs-list__item">
                <a href="#tab2" className="tabs-list__link">
                    Услуги
                </a>
            </li>
            <li className="tabs-list__item">
                <a href="#tab3" className="tabs-list__link">
                    Вопросы и ответы
                </a>
            </li>
            <li className="tabs-list__item">
                <a href="#tab3" className="tabs-list__link">
                    Контакты
                </a>
            </li>
        </ul>
    );
};

export default TabsList;
