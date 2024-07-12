import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="px-4 flex justify-between items-center mt-2">
        <Button onClick={() => handleClick("/menu")}>
          <Typography variant="h6" noWrap>
            Khanmigo
          </Typography>
        </Button>
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
            <MenuItem onClick={() => handleClick("/about")}>About</MenuItem>
            <MenuItem onClick={() => handleClick("/faq")}>FAQ</MenuItem>
            <MenuItem onClick={() => handleClick("/contact-us")}>
              Contact Us
            </MenuItem>
          </Menu>
          <div className="hidden sm:flex items-center space-x-4">
            <Button onClick={() => handleClick("/")}>
              <Typography variant="body1" className="cursor-pointer">
                Khanmigo
              </Typography>
            </Button>
            <Button onClick={() => handleClick("/faq")}>
              <Typography variant="body1" className="cursor-pointer">
                FAQ
              </Typography>
            </Button>
            <Button onClick={() => handleClick("/contact-us")}>
              <Typography variant="body1" className="cursor-pointer">
                Contact Us
              </Typography>
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
