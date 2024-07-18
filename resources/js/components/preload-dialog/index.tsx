import React from "react";
import usePhotos from "../../hooks/usePhotos";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const PreloadDialog = () => {
    const { preloading } = usePhotos();
    return (
        <Dialog open={preloading}>
            <DialogTitle>Предварительная загрузка</DialogTitle>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "200px",
                    minWidth: "300px",
                    p: 2,
                }}
            >
                <CircularProgress size={60} />
            </Box>
        </Dialog>
    );
};

export default React.memo(PreloadDialog);
