"use client";
import React from "react";
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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const programmes = [
  {
    label: "Computer Packages",
    requirements: ["Open"],
    duration: "1 month",
  },
  {
    label: "Information Communication Technology - (Certificate) KNEC",
    requirements: ["KCSE D Plain & Above"],
    duration: "1 year",
  },
  {
    label: "Information Communication Technology - (Diploma) KNEC",
    requirements: ["KCSE C- or Pass in certificate in ICT"],
    duration: "2 years",
  },
  {
    label: "Secretariat studies stage i, ii, iii KNEC",
    requirements: ["KCSE D- and Above"],
  },
];

export default function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = programmes.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1, padding: 10 }} id="#programmes">
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          width: "100%",
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography sx={{ textAlign: "center", width: "100%" }}>
          {programmes[activeStep].label}
        </Typography>
      </Paper>
      <Box sx={{ height: 255, width: "100%", p: 2 }}>
        <Grid
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <Grid item>
            <Typography
              sx={{
                textAlign: "center",
                width: "100%",
                mx: 2,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Requirements
            </Typography>
            {programmes[activeStep].requirements.map((requirement) => (
              <List key={requirement}>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={requirement} />
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item>
            <Typography
              sx={{
                textAlign: "center",
                width: "100%",
                mx: 2,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Requirements
            </Typography>
            {programmes[activeStep].requirements.map((requirement) => (
              <List key={requirement}>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={requirement} />
                </ListItem>
              </List>
            ))}
          </Grid>
        </Grid>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
