import Home from "@/sections/Programmes";
import About from "@/sections/About";
import React from "react";
import { Divider } from "@mui/material/Divider";

export default function HomePage() {
  return (
    <React.Fragment>
      <Home />
      <Divider />
      <About />
    </React.Fragment>
  );
}
