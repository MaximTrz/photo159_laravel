import usePhotos from "./usePhotos";
import ApiService from "../apiService";

const useSendOrder = () => {
    const { photosList } = usePhotos();
    const apiService = new ApiService();

    const sendOrder = async () => {
        let order_id = 0;
        if (photosList.length > 0) {
            try {
                for (const [index, photoData] of photosList.entries()) {
                    const lastPhoto = index === photosList.length - 1;
                    const response = await apiService.savePhoto(
                        photoData,
                        order_id,
                        lastPhoto,
                    );
                    if (order_id === 0) {
                        order_id = response.order_id;
                    }
                    console.log(order_id);
                }
            } catch (error) {
                console.error("Failed to save photo:", error.message);
            }
        }
    };

    return { photosList, sendOrder };
};

export default useSendOrder;
