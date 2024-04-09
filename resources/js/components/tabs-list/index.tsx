import * as React from "react";

import { NavLink } from "react-router-dom";

import useTabList from "./useTabList";

import "./style.scss";

const TabsList: React.FC = () => {
    const { setActive } = useTabList();

    return (
        <ul className="tabs-list">
            <li className="tabs-list__item --first">
                <NavLink
                    to="/"
                    className={({ isActive }) => setActive("main", isActive)}
                >
                    Главная
                </NavLink>
            </li>
            <li className="tabs-list__item">
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        setActive("services", isActive)
                    }
                >
                    Услуги
                </NavLink>
            </li>
            <li className="tabs-list__item">
                <NavLink
                    to="/faq"
                    className={({ isActive }) => setActive("faq", isActive)}
                >
                    Вопросы и ответы
                </NavLink>
            </li>
            <li className="tabs-list__item --last">
                <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                        setActive("contacts", isActive)
                    }
                >
                    Контакты
                </NavLink>
            </li>
        </ul>
    );
};

export default TabsList;
