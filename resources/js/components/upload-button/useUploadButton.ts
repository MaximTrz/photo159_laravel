import { useCallback } from "react";
import { useDispatch } from "react-redux";
import usePhotos from "../../hooks/usePhotos";
import { setPreloading, addPhotos } from "../../store/Reducer";

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
            const newPhotos: string[] = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const imageReader = new FileReader();

                imageReader.onload = (event) => {
                    if (typeof event.target?.result === "string") {
                        newPhotos.push(event.target.result);
                    }

                    filesProcessed++;

                    if (filesProcessed === files.length) {
                        dispatch(addPhotos(newPhotos));
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
