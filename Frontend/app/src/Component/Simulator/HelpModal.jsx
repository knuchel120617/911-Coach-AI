import React from "react";
import {
  Drawer,
  IconButton,
  Typography,
  Button,
  Stack,
  Box,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const HelpModal = ({ open, handleClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box
        sx={{
          width: { xs: "80%", sm: "300px" },
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Help</Typography>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: "center", marginBottom: 2 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "bold", marginTop: 2 }}
            >
              Q&A
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#f7f7f7",
              borderRadius: 2,
              padding: 2,
              marginBottom: 2,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="body1">
              What should I do if a baby is choking?
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#e0f7fa",
              borderRadius: 2,
              padding: 2,
              marginBottom: 2,
              minHeight: "100px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="body2">Lorum ipsum</Typography>
          </Box>
        </Box>
        <Stack
          direction="column"
          spacing={2}
          sx={{ alignItems: "center", marginTop: 2 }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Ask me anything"
            sx={{
              borderRadius: 2,
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            InputProps={{
              className: "rounded-lg",
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 2,
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            Ask
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default HelpModal;
