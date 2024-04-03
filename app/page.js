import React from "react";
import Programmes from "@/sections/Programmes";
import Home from "@/sections/Home";
import About from "@/sections/About";

export default function HomePage() {
  return (
    <React.Fragment>
      <Home />
      <Programmes />
      <About />
    </React.Fragment>
  );
}
