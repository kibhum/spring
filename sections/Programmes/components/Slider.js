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
      <Typography
        variant="h4"
        sx={{
          width: "100%",
          backgroundColor: theme.palette.secondary.contrastText,
          color: theme.palette.primary.dark,
          textTransform: "uppercase",
          textAlign: "center",
          p: 2,
        }}
      >
        Programmes offered{" "}
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
          backgroundColor: theme.palette.secondary.contrastText,
          color: theme.palette.primary.main,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            width: "100%",
            textTransform: "uppercase",
          }}
        >
          {programmes[activeStep].label}
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center", width: "100%" }}>
          Cost: {programmes[activeStep].cost}
        </Typography>
      </Paper>
      <Box
        sx={{
          width: "100%",
          p: 2,
          backgroundColor: theme.palette.secondary.contrastText,
          color: theme.palette.secondary.light,
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
              variant="h4"
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
                    {requirement}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              sx={{
                alignItems: "center",
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
                  <StarIcon
                    sx={{
                      color: theme.palette.primary.light,
                    }}
                  />
                </ListItemIcon>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.primary.light,
                  }}
                >
                  {programmes[activeStep].duration}
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          backgroundColor: theme.palette.secondary.contrastText,
          color: theme.palette.secondary.main,
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next Course
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
            Previous Course
          </Button>
        }
      />
    </Box>
  );
}
