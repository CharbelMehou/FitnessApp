import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageSources = [
  {
    src: "https://getwallpapers.com/wallpaper/full/b/5/6/53699.jpg",
    alt: "CarouselImage2",
  },
  {
    src: "https://getwallpapers.com/wallpaper/full/7/5/c/53625.jpg",
    alt: "CarouselImage3",
  },
  {
    src: "https://getwallpapers.com/wallpaper/full/a/3/2/53593.jpg",
    alt: "CarouselImage4",
  },
  {
    src: "https://getwallpapers.com/wallpaper/full/2/d/a/53621.jpg",
    alt: "CarouselImage5",
  },
  {
    src: "https://getwallpapers.com/wallpaper/full/b/d/6/53600.jpg",
    alt: "CarouselImage6",
  },
  {
    src: "https://getwallpapers.com/wallpaper/full/f/6/e/53510.jpg",
    alt: "CarouselImage7",
  },
];

const GymLiftersCarousel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: { xs: "100%", lg: "70%" },
        overflow: "hidden",
      }}
    >
      <Carousel
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
        interval={5000}
      >
        {imageSources.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: "100%",
              width: { xs: "50%", lg: "100%" },
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", lg: "flex-end" },
                alignItems: { xs: "flex-start", lg: "flex-end" },
                width: "400px",
                height: "auto",
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default GymLiftersCarousel;
