import React from "react";
import { Box,IconButton, Typography } from "@mui/material";
import FitImg from "../assets/images/fit1.jpg";
import { useTranslation } from "react-i18next";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: 2,
        p: 2,
        height:"86vh",
        gap: 2,
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          flexWrap: { xs: "wrap", lg: "nowrap" },
          alignItems: "center",
          justifyContent: "center",
          m: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: 'column',
            mt: 2,
            width: { xs: '100%', lg: '50%' }, // Citation prend 50% de largeur sur grand écran
          }}
        >
          <Typography variant="h3" sx={{ mb: 1 }}>
            "The way to get started is to quit talking and begin doing."
          </Typography>
          <Typography variant="h3">
            — Walt Disney
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: '100%', lg: '50%' }, // Image prend 50% de largeur sur grand écran
          }}
        >
          <img
            src={FitImg}
            alt="FitImg"
            style={{
              width: '100%', // Prend toute la largeur disponible
              height: 'auto', // Hauteur automatique pour maintenir l'aspect ratio
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexDirection: "row",
          justifyContent: 'center',
          flexWrap: { xs: "wrap", lg: "nowrap" },
        }}
      >
        <Typography
          sx={{ textAlign: "center",fontWeight:"bold",fontSize: { xs: "16px", lg: "30px" } }}
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
    </Box>
  );
};

export default HeroBanner;
