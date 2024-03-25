"use client";
import React from "react";
import {
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";

const History = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      <Typography
        sx={{
          textAlign: "center",
          width: "100%",
          textTransform: "uppercase",
        }}
      >
        History
      </Typography>
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: 50,
          width: "100%",
          pl: 2,
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Paper
          square
          elevation={2}
          sx={{
            // display: "flex",
            // alignItems: "center",
            minHeight: 50,
            width: "100%",
            pl: 2,
            bgcolor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
            textTransform: "uppercase",
          }}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText
                inset
                primary="It was started in the year 2021 by Dottie Rose foundation"
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Originally, it was to mentor young girls who had either dropped out of school or had  completed school but didn't continue studying"
              />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText
                inset
                primary="In the year 2023, it turned into a school to benefit both boys and girls."
              />
            </ListItem>
          </List>
        </Paper>
      </Paper>
    </Box>
  );
};

export default History;
