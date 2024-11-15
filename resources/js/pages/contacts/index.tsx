import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch } from "../../store";

import { fetchContacts } from "../../store/pagesSlice";
import { RootState } from "../../store";

import Spinner from "../../components/spinner";

import "./style.scss";

export interface IContacts {
    id: number;
    title: string;
    text: string;
    map_iframe: string;
}

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        VK: any;
    }
}

const ContactsPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const contactsItems: IContacts[] = useSelector(
        (state: RootState) => state.contactSlies.contacts,
    );
    useEffect(() => {
        dispatch(fetchContacts());
    }, [contactsItems]);

    useEffect(() => {
        if (window.VK) {
            window.VK.Widgets.Group(
                "vk_groups",
                { mode: 3, no_cover: 1, width: 230 },
                20064621,
            );
        }
    }, []);

    return (
        <div className="contacts">
            {contactsItems.length > 0 ? (
                contactsItems.map((item) => (
                    <div className="contacts__item" key={item.id}>
                        <h2 className="contacts__title">{item.title}</h2>
                        <div
                            className="contacts__text"
                            dangerouslySetInnerHTML={{
                                __html: item.text,
                            }}
                        ></div>
                        <div
                            className="contacts__map"
                            dangerouslySetInnerHTML={{
                                __html: item.map_iframe,
                            }}
                        />
                    </div>
                ))
            ) : (
                <Spinner />
            )}
            <div className="contacts__soc">
                <div id="vk_groups" className="viget"></div>
            </div>
        </div>
    );
};

export default ContactsPage;
