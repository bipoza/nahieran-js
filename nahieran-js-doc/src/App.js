// import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from "react";
import MenuAppBar from './Components/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Card, CardContent, Typography, CardActions, Button,
  Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions
} from "@mui/material"
import { getTVPrograms } from "http://127.0.0.1:3001/src/index.js";
import MarkDown from './Components/MarkDown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';



function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        // default: "#222831",
        paper: "#1B2430"
      }
    },
  });


  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");


  const handleClose = () => {
    setOpenDialog(false);
  };



  const getTVProgramsHandler = () => {

    setOpenDialog(true);
    setDialogTitle("Get TV program list");
    getTVPrograms().then(res => {
      console.log("OK: ", res);
      setDialogContent(res);

    });
  }

  const markdown = `

  ~~~js
  import { getTVPrograms } from "nahieran-js";

  getTVPrograms().then(res => {
    console.log("Response: ", res);
  }, err => {
    console.error("Response error: ", err);
  });

  ~~~
  `;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container fixed>
        <MenuAppBar />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />



          <Card variant="outlined" sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h3" color="text.secondary" gutterBottom>
                Getting started
              </Typography>
              <MarkDown markdown={`
  This project is based on [@erral's](https://github.com/erral) [https://github.com/erral/eitbapi-react](https://github.com/erral/eitbapi-react) project.

  A set of JS functions to use the EITB Nahieran API
  ## Install 
  ~~~bash
  npm i nahieran-js
  ~~~
  `}
              />
            </CardContent>
          </Card>


          <Typography variant="h2" id="TV" color="text.secondary" gutterBottom>
            TV
          </Typography>
          <Card variant="outlined">


            <CardContent>
              <Typography variant="h3" color="text.secondary" gutterBottom>
                Get TV program list
              </Typography>


              <MarkDown markdown={markdown} />
            </CardContent>
            <CardActions>
              <Button size="small" onClick={getTVProgramsHandler}>Try it!</Button>
            </CardActions>
          </Card>

          <Dialog
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {dialogTitle}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">

                {dialogContent &&
                  JSON.stringify(dialogContent)}
                {/* // <SyntaxHighlighter language="json"></SyntaxHighlighter> */}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>


        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
