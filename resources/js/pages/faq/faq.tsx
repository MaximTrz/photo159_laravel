import * as React from "react";
import { useState, useEffect } from "react";
import IFAQ from "../../types/FAQ";
import ApiService from "../../apiService";
import Spinner from "../../components/spinner";

import "./style.scss";

const apiService = new ApiService();

const FAQ: React.FC = () => {
    const [faqItems, setFaqItems] = useState<IFAQ[]>([]);
    useEffect(() => {
        const fetchFaq = async () => {
            const items = await apiService.getFAQFromServer();
            setFaqItems(items);
        };
        fetchFaq();
    }, []);

    return (
        <div className="faq">
            {faqItems.length > 0 ? (
                <ul className="faq__list">
                    {faqItems.map((item) => (
                        <li className="faq__item" key={item.id}>
                            <div className="faq__question">{item.question}</div>
                            <div
                                className="faq__answer"
                                dangerouslySetInnerHTML={{
                                    __html: item.answer,
                                }}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <div>
                    <Spinner />
                </div>
            )}
        </div>
    );
};

export default FAQ;
