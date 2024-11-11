import * as React from "react";
import { useState, useEffect } from "react";

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
            const items = await apiService.getServicesFromServer();
            setServiceItems(items);
        };
        fetchServices();
    });
    return (
        <div className="services">
            {serviceItems.length > 0 ? (
                <ul className="services__list">
                    {serviceItems.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Нет доступных услуг</p>
            )}
        </div>
    );
};

export default ServicesPage;
