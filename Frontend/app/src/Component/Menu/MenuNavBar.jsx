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
import { useNavigate } from "react-router-dom";

const MenuNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    console.log('clicked handleNavigate');
    handleMenuClose();
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('https://medihacks-ka2dwt1hz-marikas-projects-22112c00.vercel.app/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        // Clear local storage or any other storage mechanism
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('name');

        // Navigate to the login page or home page
        navigate('/signin');
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const logoPath = "/src/assets/logo/logo.svg";
  return (
    <AppBar
      sx={{
        backgroundColor: '#F8F9FF', 
        zIndex: 1100,
        paddingX: '40px',
      }}
      className="px-[40px] pt-[40px] bg-[#009379]"
      id="nav-bar-home"
      position="sticky"
      color="transparent"
      elevation={0}
    >
      <Toolbar className="flex justify-between items-center mt-2">
        <div className="flex flex-row gap-3 items-center">
          <img src={logoPath} alt="Logo" width="27.5px" height="auto" />
          <p variant="h6" className="font-medium" style={{ color: '#333333' }}>
            911 Coach AI
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
            <MenuItem onClick={() => handleNavigate('/simulator')}>Simulator</MenuItem>
            <MenuItem onClick={() => handleNavigate('/qa')}>Q&A</MenuItem>
            <MenuItem onClick={handleMenuClose}>AI Feedback</MenuItem>
            <MenuItem onClick={() => handleNavigate('/conversations')}>Conversations</MenuItem>
            <div className="flex items-center justify-center mt-4">
            <IconButton onClick={handleLogout}>{<LogoutIcon/>}</IconButton>
            </div>
          </Menu>
          <div className="hidden sm:flex items-center space-x-4">
            <a onClick={() => handleNavigate('/simulator')} className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              Simulator
            </a>
            <a onClick={() => handleNavigate('/qa')}className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              Q&A
            </a>
            <a className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              AI Feedback
            </a>
            <a onClick={() => handleNavigate('/conversations')}className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              Conversations
            </a>
            <IconButton onClick={handleLogout}>{<LogoutIcon/>}</IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MenuNavBar;
