import * as React from "react";
import { useCallback } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

import usePhotos from "../../hooks/usePhotos";
import usePhotoProperties from "../../hooks/usePhotoProperties";

const UploadDialog = () => {
    const { photosList, photoUploaded, uploading, orderID, setOrder } =
        usePhotos();
    const { setUploadingStatus, deleteAllPhoto } = usePhotoProperties();

    const uploadingPercent =
        photosList.length > 0 ? (photoUploaded / photosList.length) * 100 : 0;

    const title = "Загрузка фото на сервер";

    const close = useCallback(() => {
        setUploadingStatus(false);
        deleteAllPhoto();
        setOrder(0);
    }, []);

    const content =
        photoUploaded != photosList.length ? (
            <>
                <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress
                        variant="determinate"
                        value={uploadingPercent}
                    />
                    <Box
                        sx={{
                            width: "100%",
                            mr: 1,
                            textAlign: "center",
                            marginTop: "10px",
                        }}
                    >
                        {photoUploaded} из {photosList.length}
                    </Box>
                </Box>

                <Box sx={{ minWidth: 35 }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >{`${Math.round(uploadingPercent)}%`}</Typography>
                </Box>
            </>
        ) : (
            <div>Номер вашего заказа {orderID}. Ваш заказ оформлен. </div>
        );

    return (
        <Dialog
            open={uploading}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <>{content}</>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={close}
                    disabled={photoUploaded != photosList.length}
                >
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UploadDialog;
