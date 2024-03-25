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
      main: "#FF37A6",
      light: "#FFF7EF",
      dark: "#A18683",
      contrastText: "#FFF4E9",
    },
    secondary: {
      main: "#FF69BC",
      light: "#FFF5EB",
      dark: "#927A77",
      contrastText: "#FFF4E9",
    },
  },
  spacing: 4,
});

export default theme;
