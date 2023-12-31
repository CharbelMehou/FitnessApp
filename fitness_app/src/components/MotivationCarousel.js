import { Box, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";

const MotivationCarousel = () => {
  const { t } = useTranslation();

  const motivationSources = [
    { label: t("here-we-go") },
    { label: t("eat-work-sleep-again") },
    { label: t("nothing-can-stop-you") },
    { label: t("showTime") },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "50%" }}>
      <Carousel
        showArrows={false}
        showStatus={false}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
        interval={10000}
      >
        {motivationSources.map((motivation, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              textAlign: "left",
              justifyContent: "flex-start",
              width: "50%",
            }}
          >
            <Typography
              color="#FF2625"
              sx={{ fontSize: { xs: "16", lg: "25px" } }}
            >
              {motivation.label}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default MotivationCarousel;
