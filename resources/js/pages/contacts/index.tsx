import * as React from "react";
import { useEffect, useState } from "react";

import ApiService from "../../apiService";

interface IContacts {
    id: number;
    title: string;
    text: string;
    map_iframe: string;
}

const ContactsPage: React.FC = () => {
    const apiService = new ApiService();

    const [contactsItem, setContactsItem] = useState<IContacts[]>([]);

    useEffect(() => {
        const fetchContacts = async () => {
            const items: IContacts[] = await apiService.getContactsFormServer();
            setContactsItem(items);
        };
        fetchContacts();
    }, []);

    return <div></div>;
};

export default ContactsPage;
