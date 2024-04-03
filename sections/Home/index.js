"use client";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import CoreValues from "./components/CoreValues";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          backgroundColor: theme.palette.secondary.dark,
        }}
        color={theme.palette.secondary.light}
      >
        spring of hope riverside college - Bomet
      </Typography>
      <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        <Vision />
        <Mission />
        <CoreValues />
      </Box>
    </Box>
  );
}
