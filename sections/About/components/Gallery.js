"use client";
import React from "react";
import Slider from "react-slick";
import ImageCard from "./Images";
import { getImages } from "../content/fetcher";
import Container from '@mui/material/Container';
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
const images = getImages();

export default function Gallery() {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container sx={{ maxWidth: "100%" }}>
      <Typography variant="h4" sx={{
        width: "100%",
        color: theme.palette.primary.light,
        textTransform: "uppercase",
        textAlign: "center",
        p:2
      }}>Get to know the spring of hope team </Typography>
      <Slider {...settings}>
        {images.map((image) => (
          <ImageCard
            key={image.title}
            title={image.title}
            path={image.path}
            description={image.description}
          />
        ))}
      </Slider>
    </Container>
  );
}
