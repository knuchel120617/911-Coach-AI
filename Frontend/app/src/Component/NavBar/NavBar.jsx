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

  const logoPath = "/src/assets/logo/logo.svg";

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="px-4 flex justify-between items-center mt-2">
      <img src={logoPath} alt="Logo" width="300px" height="150px"/>
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
            <div className="flex items-center justify-center mt-4">
              <Buttons
                primary
                rounded
                className="text-white bg-[#10B981] px-3 py-2 text-sm" // Adjust button size
                onClick={handleCloseMenu}
              >
                Let's Get Started
              </Buttons>
            </div>
          </Menu>
          <div className="hidden sm:flex items-center space-x-4">
            <Typography variant="body1" className="cursor-pointer">
              About
            </Typography>
            <Typography variant="body1" className="cursor-pointer">
              FAQ
            </Typography>
            <Typography variant="body1" className="cursor-pointer">
              Contact Us
            </Typography>
            <Buttons
              onClick={handleClick}
              primary
              rounded
              className="text-white bg-[#10B981] px-4 py-2"
              style={{ minWidth: "auto" }}
            >
              Let's Get Started
            </Buttons>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
