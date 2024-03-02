import React from "react";
import { Box, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import frIcon from "../assets/icons/fr-icon.png";
import enIcon from "../assets/icons/en-icon.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" ,mt:1}}>
      <IconButton
        onClick={() => changeLanguage("fr")}
        size="small"
        sx={{
          '&:hover': {
            backgroundColor: i18n.language === 'fr' ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
          },
        }}
      >
        <img
          src={frIcon}
          alt="frIcon"
          style={{ maxWidth: '24px', maxHeight: '24px' }}
        />
      </IconButton>
      <IconButton
        onClick={() => changeLanguage("en")}
        size="small"
        sx={{
          '&:hover': {
            backgroundColor: i18n.language === 'en' ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
          },
        }}
      >
        <img
          src={enIcon}
          alt="enIcon"
          style={{ maxWidth: '24px', maxHeight: '24px' }}
        />
      </IconButton>
    </Box>
  );
};

export default LanguageSwitcher;
