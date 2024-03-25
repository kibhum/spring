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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { getProgrammes } from "@/content/programmes/fetcher";

const programmes = getProgrammes();
const generalRequirements = [
  "KCSE CERTIFICATE OR RESULTS SLIP COPY",
  "COPY OF ID",
  "PASSPORT PHOTO",
  "BIRTH CERTIFICATE",
];
export default function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = programmes.length;
  const requirements =
    programmes[activeStep].requirements.concat(generalRequirements);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1 }} id="#programmes">
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
        <Typography
          sx={{
            textAlign: "center",
            width: "100%",
            textTransform: "uppercase",
          }}
        >
          {programmes[activeStep].label}
        </Typography>
        <Typography sx={{ textAlign: "center", width: "100%" }}>
          Cost: {programmes[activeStep].cost}
        </Typography>
      </Paper>
      <Box
        sx={{
          width: "100%",
          p: 2,
          // bgcolor: theme.palette.secondary.main,
          // color: theme.palette.secondary.contrastText,
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            p: 2,
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
            {requirements.map((requirement) => (
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
              Duration
            </Typography>
            <List key={programmes[activeStep].duration}>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText inset primary={programmes[activeStep].duration} />
              </ListItem>
            </List>
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
