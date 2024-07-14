import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Buttons from "../Button/Buttons";

const NavBar = () => {
  const naviage = useNavigate();
  const handleClick = () => {
    naviage("/signup");
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const logoPath = "./assets/logo/logo.svg";

  return (
    <AppBar className="px-[40px]" id="nav-bar-home" position="static" color="transparent" elevation={0}>
      <Toolbar className="px-4 flex justify-between items-center mt-2">
      <div className="flex flex-row gap-3 justify-center items-center align-center">
      <img src={logoPath} alt="Logo" width="27.5px" height="auto"/>
      <p className="font-medium" style={{ color: '#333333' }}>999 Coach AI</p>
      </div>
      

        <div className="flex items-center space-x-4">
          <IconButton
            onClick={handleMenuToggle}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" } }}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Menu
            anchorEl={null}
            open={isOpen}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            getContentAnchorEl={null}
            PaperProps={{
              style: {
                marginTop: "60px", // Adjust as needed to position menu below app bar
                minWidth: "200px", // Ensure minimum width for the menu
              },
            }}
          >
            <MenuItem onClick={handleCloseMenu}>About</MenuItem>
            <MenuItem onClick={handleCloseMenu}>FAQ</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Contact Us</MenuItem>
            <div  className="flex items-center justify-center mt-4">
              <Buttons
                primary
                rounded
                className="text-white bg-[#009379] px-6 py-3 border-none rounded-[10px] text-sm" 
                onClick={handleCloseMenu}
              >
                Get Started
              </Buttons>
            </div>
          </Menu>
          <div className="hidden sm:flex items-center space-x-4">
            <a className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              About
            </a>
            <a className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              FAQ
            </a>
            <a className="cursor-pointer text-sm px-3 font-medium" style={{ color: '#009379' }}>
              Contact Us
            </a>
            <Buttons
              onClick={handleClick}
              primary
              rounded
              className="text-white bg-[#009379] px-6 py-3 border-none rounded-[10px] text-sm" // Adjust button size
              style={{ minWidth: "auto" }}
            >
              Get Started
            </Buttons>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
