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
        variant="h4"
        sx={{
          textAlign: "center",
          width: "100%",
          textTransform: "uppercase",
          width: "100%",
          p: 2,
          bgcolor: theme.palette.secondary.contrastText,
          color: theme.palette.secondary.main,
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
        }}
      >
        <Paper
          square
          elevation={2}
          sx={{
            minHeight: 50,
            width: "100%",
            pl: 2,
            bgcolor: theme.palette.secondary.dark,
            color: theme.palette.secondary.contrastText,
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
                secondary="It was started in the year 2021 by Dottie Rose foundation"
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
                secondary="Originally, it was to mentor young girls who had either dropped out of school or had  completed school but didn't continue studying"
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
                secondary="In the year 2023, it turned into a school to benefit both boys and girls."
              />
            </ListItem>
          </List>
        </Paper>
      </Paper>
    </Box>
  );
};

export default History;
