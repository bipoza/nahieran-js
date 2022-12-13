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
  DialogActions,
  TextField,
  Link,
  Snackbar,
} from "@mui/material";
import MarkDown from "./MarkDown";
import { stringSlugify } from "../helpers/utils";
import LinkIcon from "@mui/icons-material/Link";
import { Window } from "@mui/icons-material";
const DocCard = ({
  title,
  markdown,
  actionFunction = null,
  actionParam = null,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");

  const handleClose = () => {
    setOpenDialog(false);
  };
  const demoFunctionHandler = () => {
    setOpenDialog(true);
    setDialogTitle("Get TV program list");
    actionFunction &&
      actionFunction(demoFunctionParam || null).then((res) => {
        console.log("OK: ", res);
        setDialogContent(res);
      });
  };

  const [demoFunctionParam, setDemoFunctionParam] = useState(actionParam);
  function demoFunctionParamChange(event) {
    setDemoFunctionParam(event.target.value);
  }

  const [openCopyToClipboardMessage, setOpenCopyToClipboardMessage] =
    useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `${window.location.host}#${stringSlugify(title)}`
    );
    setOpenCopyToClipboardMessage(true);
    setTimeout(() => setOpenCopyToClipboardMessage(false), 3000);
  };
  return (
    <>
      <Card
        variant="outlined"
        sx={{ borderRadius: "20px" }}
        id={stringSlugify(title)}
      >
        <CardContent>
          <Typography variant="h3" color="text.secondary" gutterBottom>
            <Link 
              href={`#${stringSlugify(title)}`}
              onClick={copyToClipboard}
              color="inherit"
              underline="none">
              {title}
              <LinkIcon  sx={{marginLeft: "10px"}}/>
            </Link>
            <Snackbar
              open={openCopyToClipboardMessage}
              message="Copied to clipboard"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            />
          </Typography>

          <MarkDown markdown={markdown} />
        </CardContent>
        {actionFunction && (
          <CardActions
            style={{
              marginBottom: "10px",
              marginLeft: "10px",
              paddingTop: "none",
            }}
          >
            {actionParam && (
              <TextField
                size="small"
                label="Function parameter"
                value={demoFunctionParam}
                onChange={demoFunctionParamChange}
              />
            )}

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
          {dialogContent && (
            <pre>{JSON.stringify(dialogContent, undefined, 4)}</pre>
          )}
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
