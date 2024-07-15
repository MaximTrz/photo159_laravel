import usePhotos from "./usePhotos";
import ApiService from "../apiService";
import { useDispatch } from "react-redux";
import { setPhotoUploaded, setUploading } from "../store/Reducer";

const useSendOrder = () => {
    const { photosList, uploading } = usePhotos();
    const apiService = new ApiService();

    const dispatch = useDispatch();

    const sendOrder = async () => {
        let order_id = 0;
        if (!uploading) {
            dispatch(setUploading(true));
        }
        if (photosList.length > 0) {
            try {
                for (const [index, photoData] of photosList.entries()) {
                    const lastPhoto = index === photosList.length - 1;
                    const response = await apiService.savePhoto(
                        photoData,
                        order_id,
                        lastPhoto,
                    );

                    dispatch(setPhotoUploaded(photoData));

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

    return { sendOrder };
};

export default useSendOrder;
