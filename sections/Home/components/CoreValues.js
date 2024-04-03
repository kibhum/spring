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
import Grid from "@mui/material/Grid";

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
    <Box
      sx={{
        width: "100%",
        p: 2,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.main,
        textTransform: "uppercase",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          width: "100%",
          mx: 2,
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Core Values
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Grid item>
          {coreValues.slice(0, 3).map((value) => (
            <List key={value}>
              <ListItem>
                <ListItemIcon>
                  <StarIcon
                    sx={{
                      color: theme.palette.secondary.light,
                    }}
                  />
                </ListItemIcon>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.secondary.main,
                  }}
                >
                  {value}
                </Typography>
              </ListItem>
            </List>
          ))}
        </Grid>
        <Grid item>
          {coreValues.slice(3, 6).map((value) => (
            <List key={value}>
              <ListItem>
                <ListItemIcon>
                  <StarIcon
                    sx={{
                      color: theme.palette.secondary.light,
                    }}
                  />
                </ListItemIcon>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.secondary.main,
                  }}
                >
                  {value}
                </Typography>
              </ListItem>
            </List>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
