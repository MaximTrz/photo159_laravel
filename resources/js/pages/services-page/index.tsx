import * as React from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { AppDispatch } from "../../store";

import Spinner from "../../components/spinner";

import "./style.scss";

import { fetchServices } from "../../store/pagesSlice";

export interface IServices {
    id: number;
    title: string;
    description: string;
    image: string;
}

const ServicesPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const serviceItems: IServices[] = useSelector(
        (state: RootState) => state.contactSlies.services,
    );
    useEffect(() => {
        dispatch(fetchServices());
    }, [serviceItems]);

    return (
        <div className="services">
            {serviceItems.length > 0 ? (
                <ul className="services__list">
                    {serviceItems.map((item) => (
                        <li key={item.id} className="services__item">
                            <h2 className="services__title">{item.title}</h2>
                            <div
                                className="services__description"
                                dangerouslySetInnerHTML={{
                                    __html: item.description,
                                }}
                            />
                            <img className="services__image" src={item.image} />
                        </li>
                    ))}
                </ul>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default ServicesPage;
