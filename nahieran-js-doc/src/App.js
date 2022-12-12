import React from 'react';
import MenuAppBar from './Components/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Typography,
  CssBaseline,
  Toolbar,
  Box,
  Container
} from "@mui/material"
// import { getTVPrograms } from "http://127.0.0.1:3001/src/index.js";
import DocCard from './Components/DocCard';
import { TV_DOCS } from './Docs/tv';
import { GETTING_STARTED } from './Docs/general';


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

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container fixed>
        <MenuAppBar />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />

          <DocCard
            title={GETTING_STARTED.title}
            markdown={GETTING_STARTED.description} />

          <Box id="TV">
            <Typography variant="h2" id="TV" color="text.secondary" gutterBottom sx={{ marginTop: 3 }}>
              TV
            </Typography>
            {
              TV_DOCS.map(doc => <DocCard
                title={doc.title}
                markdown={doc.description}
                demoFunction={doc.demoFunction} />)
            }
          </Box>

        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
