"use client";
import React from "react";
import Slider from "react-slick";
import ImageCard from "./Images";
import { getImages } from "../content/fetcher";
const images = getImages();

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
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
  );
}
