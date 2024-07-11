import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import LinearProgress, {
    LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const UploadDialog = (props: LinearProgressProps & { value: number }) => {
    return (
        <Dialog
            open={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Загрузка фото на сервер"}
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: "100%", mr: 1 }}>
                        <LinearProgress variant="determinate" {...props} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >{`${Math.round(props.value)}%`}</Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button disabled autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UploadDialog;
