import { Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import GymLiftersCarousel from "./GymLiftersCarousel";
import MotivationCarousel from "./MotivationCarousel";
import { useTranslation } from "react-i18next";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        m: 2,
        p: 2,
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          flexWrap: { xs: "wrap", lg: "nowrap" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <MotivationCarousel />
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{ fontSize: { xs: "16px", lg: "25px" } }}
              fontWeight={700}
            >
              {t("workout")}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "16px", lg: "25px" } }}
              fontWeight={700}
            >
              {t("sweat")}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "16px", lg: "25px" } }}
              fontWeight={700}
            >
              {t("smile")}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "16px", lg: "25px" } }}
              fontWeight={700}
            >
              {t("and-repeat")}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: { xs: "flex-start", lg: "flex-end" },
          }}
        >
          <GymLiftersCarousel />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "row",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          mt: 2,
          mb: 2,
          width: { xs: "50%", lg: "100%" },
        }}
      >
        <Typography
          sx={{ textAlign: "flex-start", fontSize: { xs: "16px", lg: "22px" } }}
        >
          {t("exercises-below")}
        </Typography>
        <IconButton
          size="small"
          href="#exercises"
          sx={{ backgroundColor: "#FF2625", color: "white" }}
        >
          <ArrowDownwardIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default HeroBanner;
