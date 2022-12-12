import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MenuAppBar from './Components/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Card, CardContent, Typography, CardActions, Button,
} from "@mui/material"
import MarkDown from './Components/MarkDown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { getTVPrograms } from "http://127.0.0.1:3001/src/index.js";
import { getTVPrograms } from "nahieran-js";
import React from 'react';
import DocCard from './Components/DocCard';






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




          <DocCard
            title="Getting started"
            markdown={`
This project is based on [@erral's](https://github.com/erral) [https://github.com/erral/eitbapi-react](https://github.com/erral/eitbapi-react) project.

A set of JS functions to use the EITB Nahieran API
## Install 
~~~bash
npm i nahieran-js
~~~
            `} />

          <Typography variant="h2" id="TV" color="text.secondary" gutterBottom sx={{ marginTop: 3 }}>
            TV
          </Typography>


          <DocCard
            title="Get TV program list"
            markdown={markdown}
            demoFunction={getTVPrograms} />
          {/* <Card variant="outlined">


            <CardContent>
              <Typography variant="h3" color="text.secondary" gutterBottom>
                
              </Typography>


              <MarkDown markdown={markdown} />
            </CardContent>
            <CardActions>
              <Button size="small" onClick={getTVProgramsHandler}>Try it!</Button>
            </CardActions>
          </Card> */}




        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
