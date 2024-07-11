import React from "react";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuNavBar = () => {
  return (
    <header className="w-full p-4 flex justify-between items-center bg-white shadow-md">
      <Typography variant="h5" component="div">
        Khanmigo
      </Typography>
      <IconButton edge="end" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
    </header>
  );
};

export default MenuNavBar;
