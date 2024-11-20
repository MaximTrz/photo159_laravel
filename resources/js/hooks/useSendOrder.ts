import usePhotos from "./usePhotos";
import ApiService from "../apiService";
import { useDispatch } from "react-redux";
import { setPhotoUploaded, setUploading } from "../store/Reducer";

import { IOrderData } from "../components/form-order";

const useSendOrder = () => {
    const { photosList, uploading } = usePhotos();
    const apiService = new ApiService();

    const dispatch = useDispatch();

    const sendOrder = async (orderData: IOrderData) => {
        let order_id = 0;
        let lastRequestTime = 0;
        const MIN_REQUEST_INTERVAL = 1000; // В миллисекундах (здесь 1000 мс = 1 секунда)

        if (!uploading) {
            dispatch(setUploading(true));
        }

        if (photosList.length > 0) {
            try {
                for (const [index, photoData] of photosList.entries()) {
                    const lastPhoto = index === photosList.length - 1;

                    // Управление скоростью отправки запросов
                    const elapsed = Date.now() - lastRequestTime;
                    if (elapsed < MIN_REQUEST_INTERVAL) {
                        await new Promise((resolve) =>
                            setTimeout(resolve, MIN_REQUEST_INTERVAL - elapsed),
                        );
                    }

                    const response = await apiService.savePhoto(
                        photoData,
                        order_id,
                        lastPhoto,
                        orderData,
                    );

                    dispatch(setPhotoUploaded(photoData));

                    if (order_id === 0) {
                        order_id = response.order_id;
                    }
                    console.log(order_id);

                    lastRequestTime = Date.now();
                }
            } catch (error) {
                console.error("Failed to save photo:", error.message);
            }
        }
    };

    return { sendOrder };
};

export default useSendOrder;
