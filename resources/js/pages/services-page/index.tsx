import * as React from "react";
import { useState, useEffect } from "react";

import Spinner from "../../components/spinner";

import "./style.scss";
import ApiService from "../../apiService";

const apiService = new ApiService();

interface IServices {
    id: number;
    title: string;
    description: string;
    image: string;
}

const ServicesPage: React.FC = () => {
    const [serviceItems, setServiceItems] = useState<IServices[]>([]);
    useEffect(() => {
        const fetchServices = async () => {
            const items: IServices[] = await apiService.getServicesFromServer();
            setServiceItems(items);
        };
        fetchServices();
    });
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
