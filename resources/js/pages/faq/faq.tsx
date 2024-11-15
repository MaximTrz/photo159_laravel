import * as React from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { AppDispatch } from "../../store";

import { fetchFAQ } from "../../store/pagesSlice";

import IFAQ from "../../types/FAQ";

import Spinner from "../../components/spinner";

import "./style.scss";

const FAQ: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const faqItems: IFAQ[] = useSelector(
        (state: RootState) => state.contactSlies.faq,
    );
    useEffect(() => {
        dispatch(fetchFAQ());
    }, [faqItems]);

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
