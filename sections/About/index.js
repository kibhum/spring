"use client";
import React from "react";
import History from "./components/History";
import Gallery from "./components/Gallery";
import Box from "@mui/material/Box";
import TypographyWithShadow from "@/common/TextWithShadow";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const About = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ width: "100%", flexGrow: 1, bgcolor: theme.palette.secondary.dark }}
      id="#about"
    >
      <Typography
        variant="h5"
        sx={{
          width: "100%",
          bgcolor: theme.palette.secondary.contrastText,
          color: theme.palette.secondary.light,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        About Spring of hope{" "}
      </Typography>
      <History />
      <Gallery />
    </Box>
  );
};

export default About;
