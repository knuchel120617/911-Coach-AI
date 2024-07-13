import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Buttons from "../Button/Buttons";

const MenuNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logoPath = "/src/assets/logo/logo.svg";
  return (
    <AppBar
      className="px-[40px]"
      id="nav-bar-home"
      position="static"
      color="transparent"
      elevation={0}
    >
      <Toolbar className="flex justify-between items-center mt-2">
        <div className="flex flex-row gap-3 items-center">
          <img src={logoPath} alt="Logo" width="27.5px" height="auto" />
          <p variant="h6" className="font-medium" style={{ color: '#333333' }}>
            999 Coach AI
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ display: { sm: "none" } }}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              style: {
                marginTop: "60px", // Adjust as needed to position menu below app bar
                minWidth: "200px", // Ensure minimum width for the menu
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>Simulator</MenuItem>
            <MenuItem onClick={handleMenuClose}>Q&A</MenuItem>
            <MenuItem onClick={handleMenuClose}>AI Feedback</MenuItem>
            <MenuItem onClick={handleMenuClose}>Conversations</MenuItem>
            <div className="flex items-center justify-center mt-4">
            <IconButton>{<LogoutIcon/>}</IconButton>
            </div>
          </Menu>
          <div className="hidden sm:flex items-center space-x-4">
            <a className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              Simulator
            </a>
            <a className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              Q&A
            </a>
            <a className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              AI Feedback
            </a>
            <a className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              Conversations
            </a>
            <IconButton>{<LogoutIcon/>}</IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MenuNavBar;
