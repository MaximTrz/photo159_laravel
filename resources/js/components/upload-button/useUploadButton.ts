import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../../store/Reducer";

const useUploadButton = () => {
    const dispatch = useDispatch();
    const addImages = useCallback((event) => {
        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const imageReader = new FileReader();

            imageReader.onload = (event) => {
                dispatch(addPhoto(event.target?.result));
            };

            imageReader.readAsDataURL(file);
        }
    }, []);
    return {
        addImages,
    };
};

export default useUploadButton;
