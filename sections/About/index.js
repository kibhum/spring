import React from "react";
import History from "./components/History";
import Gallery from "./components/Gallery";
import Box from "@mui/material/Box";

const About = () => {
  return (
    <Box sx={{ width: "100%", flexGrow: 1 }} id="#about">
      <History />
      <Gallery />
    </Box>
  );
};

export default About;
