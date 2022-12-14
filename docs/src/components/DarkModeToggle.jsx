import React from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkModeContext } from "../helpers/context";
import { IconButton } from "@mui/material";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = React.useContext(DarkModeContext);
  return (
    <IconButton
      size="large"
      aria-label="nahieran-js github repository"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      edge="end"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default DarkModeToggle;
