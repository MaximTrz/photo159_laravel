import axios from "axios";
import { IOrderData } from "./components/form-order";

export default class ApiService {
    baseUrl = "http://h90911xf.beget.tech";

    async savePhoto(photoData, order_id, lastPhoto, orderData: IOrderData) {
        try {
            const formData = new FormData();
            formData.append("size_id", photoData.size_id);
            formData.append("material_id", photoData.material_id);
            formData.append("amount", photoData.amount);
            formData.append("margin_id", "1");

            const imageBlob = await fetch(photoData.image).then((res) =>
                res.blob(),
            );

            const imageFile = new File([imageBlob], "1.jpg");

            formData.append("photo", imageFile);

            if (lastPhoto) {
                formData.append("last_photo", "1");
            }

            if (order_id !== 0) {
                formData.append("order_id", order_id);
            }

            formData.append("name", orderData.first_name);
            formData.append("surname", orderData.surname);
            formData.append("email", orderData.email);
            formData.append("phone", orderData.tel);
            formData.append(
                "delivery_type",
                orderData.delivery_method.toString(),
            );
            formData.append("pay_type", orderData.pay_method.toString());

            const response = await axios.post(
                `${this.baseUrl}/api/photo`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );
            return response.data;
        } catch (error) {
            throw new Error("Failed to send object to server");
        }
    }

    async get(url) {
        try {
            const response = await axios.get(`${this.baseUrl}${url}`);
            return response.data;
        } catch (error) {
            throw new Error("Failed to fetch price data");
        }
    }

    async getPricesFormServer() {
        const response = await this.get("/api/prices");
        return response;
    }

    async getFAQFromServer() {
        const response = await this.get("/api/faq");
        return response;
    }

    async getServicesFromServer() {
        const response = await this.get("/api/services");
        return response;
    }

    async getContactsFormServer() {
        const response = await this.get("/api/contacts");
        return response;
    }
}
