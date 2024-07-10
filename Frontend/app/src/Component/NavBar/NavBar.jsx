import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Buttons from "../Button/Buttons"; // Assuming Buttons component is correctly imported

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="px-4 flex justify-between items-center mt-2">
        <Typography variant="h6" noWrap>
          EM-Buddyn
        </Typography>
        <div className="flex items-center space-x-4">
          <IconButton
            onClick={handleMenuToggle}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" } }}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <div
            className={`flex items-center space-x-4 ${isMenuOpen ? "block" : "hidden"}`}
          >
            <Typography variant="body1" className="cursor-pointer">
              About
            </Typography>
            <Typography variant="body1" className="cursor-pointer">
              FAQ
            </Typography>
            <Typography variant="body1" className="cursor-pointer">
              Contact Us
            </Typography>
            <div className="flex items-center">
              <Buttons
                primary
                rounded
                className="text-white bg-[#10B981] px-4 py-2"
                style={{ minWidth: "auto" }}
              >
                Let's Get Started
              </Buttons>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
