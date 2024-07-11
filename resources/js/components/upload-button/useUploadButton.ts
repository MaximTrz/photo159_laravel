import { useCallback } from "react";
import { useDispatch } from "react-redux";
import usePhotos from "../../hooks/usePhotos";
import { addPhoto, setPreloading } from "../../store/Reducer";

const useUploadButton = () => {
    const dispatch = useDispatch();
    const { preloading } = usePhotos();
    const addImages = useCallback(
        (event) => {
            const files = event.target.files;

            if (!preloading) {
                dispatch(setPreloading(true));
            }

            let filesProcessed = 0;

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const imageReader = new FileReader();

                imageReader.onload = (event) => {
                    dispatch(addPhoto(event.target?.result));

                    filesProcessed++;

                    if (filesProcessed === files.length) {
                        dispatch(setPreloading(false));
                    }
                };

                imageReader.readAsDataURL(file);
            }
        },
        [dispatch],
    );

    return {
        addImages,
    };
};

export default useUploadButton;
