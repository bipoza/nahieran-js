import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import MarkDown from "./MarkDown";

const DocCard = ({ title, markdown, demoFunction = null }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");

  const handleClose = () => {
    setOpenDialog(false);
  };
  const demoFunctionHandler = () => {
    setOpenDialog(true);
    setDialogTitle("Get TV program list");
    demoFunction && demoFunction().then((res) => {
      console.log("OK: ", res);
      setDialogContent(res);
    });
  };
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3" color="text.secondary" gutterBottom>
            {title}
          </Typography>

          <MarkDown markdown={markdown} />
        </CardContent>
        {demoFunction && (
          <CardActions>
            <Button size="small" onClick={demoFunctionHandler}>
              Try it!
            </Button>
          </CardActions>
        )}
      </Card>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent && JSON.stringify(dialogContent)}
            {/* // <SyntaxHighlighter language="json"></SyntaxHighlighter> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DocCard;
