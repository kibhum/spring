"use client";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Vision() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: theme.palette.secondary.dark,
        textAlign: "center",
        textTransform: "uppercase",
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h3" color={theme.palette.primary.main}>
          Vision
        </Typography>
        <Typography variant="h5" color={theme.palette.secondary.light}>
          A spring of excellence
        </Typography>
      </CardContent>
    </Card>
  );
}
