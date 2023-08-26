import { Box, IconButton } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import frIcon from '../assets/icons/fr-icon.png'
import enIcon from '../assets/icons/en-icon.png'

const LangageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <Box sx={{display:'flex',flexDirection:"row"}}>
      <IconButton onClick={() => changeLanguage("fr")} >
           <img src={frIcon} alt="enIcon" style={{ width: '24px', height: '24px' }} fontSize="inherit" />  
       </IconButton>
      <IconButton onClick={() => changeLanguage("en")} >
        <img src={enIcon} alt="enIcon" style={{ width: '24px', height: '24px' }} fontSize="inherit"/>
      </IconButton>
    </Box>
  );
};

export default LangageSwitcher;
