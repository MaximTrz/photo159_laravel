import { useCallback } from "react";
import { useDispatch } from "react-redux";
import usePhotos from "../../hooks/usePhotos";
import { setPreloading, addPhotos } from "../../store/Reducer";

const useUploadButton = () => {
    const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxImageSizeInBytes = 25 * 1024 * 1024;

    const dispatch = useDispatch();
    const { preloading } = usePhotos();
    const addImages = useCallback(
        (event) => {
            const files = event.target.files;

            if (!preloading) {
                dispatch(setPreloading(true));
            }

            let filesProcessed = 0;
            const fileURLs: string[] = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                if (
                    allowedImageTypes.includes(file.type) &&
                    file.size <= maxImageSizeInBytes
                ) {
                    const fileURL = URL.createObjectURL(file);
                    fileURLs.push(fileURL);
                    filesProcessed++;

                    if (filesProcessed === files.length) {
                        dispatch(addPhotos(fileURLs));
                    }
                }
            }
        },
        [dispatch],
    );

    return {
        addImages,
    };
};

export default useUploadButton;
