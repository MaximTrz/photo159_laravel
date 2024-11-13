import axios from "axios";

export default class ApiService {
    baseUrl = "http://127.0.0.1:8000";

    async savePhoto(photoData, order_id, lastPhoto) {
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

            formData.append("name", "Максим");
            formData.append("surname", "Трапезников");
            formData.append("email", "maxim.trz@gmail.com");
            formData.append("phone", "9068715548");
            formData.append("delivery_type", "1");
            formData.append("pay_type", "1");
            formData.append("delivery_address", "Бачурина 1");

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
