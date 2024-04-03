"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#FBD867",
      light: "#FBE391",
      dark: "#E3CA7C",
      contrastText: "#0D5A9A",
    },
    secondary: {
      main: "#FBD864",
      light: "#F9CCC4",
      dark: "#38747F",
      contrastText: "#0D5A7F",
    },
  },
  spacing: 4,
});

export default theme;
