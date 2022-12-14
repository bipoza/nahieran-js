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
import './App.css';
import useScrollToHash from 'helpers/hooks/useScrollToHash';
import { DarkModeContext } from './helpers/context';
import useLocalStorage from './helpers/hooks/useLocalStorage';
function App() {
  useScrollToHash();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: "#222831",
        paper: "#1B2430",
        // default: "#1B2430",
        // paper: "#222831"
      }
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      // primary: blueGrey,
      primary: { main: "#343C46" },
      text: {
        primary: "#343C46",
        secondary: "#343C46",
      },
      divider: "#bcc0c4",
      background: {
        // default: "#222831",
        // paper: "#1B2430"
      }
    },
  });


  const [darkMode, setDarkMode] = useLocalStorage("dark", true);
  const value = { darkMode, setDarkMode };
  return (
    <DarkModeContext.Provider value={value}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
                TV_DOCS.map((doc, i) => <Box sx={{ marginBottom: 3 }} key={i}>
                  <DocCard
                    title={doc.title}
                    markdown={doc.description}
                    actionFunction={doc.actionFunction}
                    actionParam={doc.actionParam}
                  />
                </Box>)
              }
            </Box>

          </Box>
        </Container>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
