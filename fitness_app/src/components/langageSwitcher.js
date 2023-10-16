import { Box, IconButton } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import frIcon from "../assets/icons/fr-icon.png";
import enIcon from "../assets/icons/en-icon.png";

const LangageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <IconButton
        onClick={() => changeLanguage("fr")}
        size="inherrit"
      >
        <img src={frIcon} alt="frIcon" className="languageswitcherImg" />
      </IconButton>
      <IconButton
        size="inherrit"
        onClick={() => changeLanguage("en")}
      >
        <img src={enIcon} alt="enIcon" className="languageswitcherImg" />
      </IconButton>
    </Box>
  );
};

export default LangageSwitcher;
