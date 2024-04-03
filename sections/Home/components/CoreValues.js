"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import StarIcon from "@mui/icons-material/Star";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const coreValues = [
  "excellence",
  "Continuous improvement",
  "integrity",
  "fear of God",
  "compassion",
  "tolerance",
];
export default function CoreValues() {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", flexGrow: 1 }} id="#programmes">
      <Typography variant="h4" sx={{
        width: "100%",
        backgroundColor:theme.palette.primary.contrastText,
        color: theme.palette.primary.dark,
        
        textAlign: "center",
        p:2
      }}>Core values </Typography>
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: 50,
          width: "100%",
          pl: 2,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          textTransform: "uppercase",
        }}
      >
         {coreValues.map((value) => (
              <List key={value}>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={value} />
                </ListItem>
              </List>
            ))}
        
      </Paper>
    </Box>
  );
}
