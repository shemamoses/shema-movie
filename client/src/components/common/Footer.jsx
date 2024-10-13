import { Paper, Stack, Button, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import menuConfigs from "../../configs/menu.configs";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  return (
    <Container>
      <Paper
        square={true}
        sx={{ backgroundImage: "unset", padding: "2rem", position: "relative" }}
      >
        <Typography
          variant="body2"
          align="center"
          sx={{
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            color: "gray",
          }}
        >
          &copy; 2024 SHEMA Movie Developed by{" "}
          <a
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
            href="https://www.linkedin.com/in/shema-moses-a70816268/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shema Moses
          </a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Footer;
