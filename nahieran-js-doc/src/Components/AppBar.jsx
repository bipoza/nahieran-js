import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import GitHubIcon from "@mui/icons-material/GitHub";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import { GITHUB_REPO } from "../config/contants";
import { Typography } from "@mui/material";
export default function MenuAppBar() {
  const pages = ["TV", "Radios", "Contributing"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          component="nav"
          color="transparent"
          style={{
            backdropFilter: "blur(20px)",
            // backgroundColor: "rgb(28 29 31 / 19%)",
            boxShadow: "none",
            borderBottom: `0.5px solid ${theme.palette.divider}`,
          }}
        >
          <Toolbar>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {pages.map((page, i) => (
                <MenuItem onClick={handleClose} key={i}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                edge="start"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* <img
              src="/logo.svg"
              alt="nahieran-js-logo"
              style={{ width: "200px" }}
            /> */}
            <Typography variant="h4">NahieranJS</Typography>
            <Box
              sx={{
                flexGrow: 1,
                marginLeft: 5,
                display: { xs: "none", md: "flex" },
              }}
              // justifyContent="center"
            >
              {pages.map((page, i) => (
                <Link
                  href={`#${page}`}
                  key={i}
                  color="inherit"
                  underline="none"
                >
                  <Button key={page} sx={{ my: 2, display: "block" }}>
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            <Link
              href={GITHUB_REPO}
              color="inherit"
              underline="none"
              target="_blank"
            >
              <IconButton
                size="large"
                aria-label="nahieran-js github repository"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                edge="end"
              >
                <GitHubIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
