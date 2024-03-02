import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box} from "@mui/material";
import Logo from "../assets/images/Logo1.png";
import LangageSwitcher from "./langageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <Box
      className="navbar"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        pt:2
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="logoNavbar" />
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Stack direction="row" gap="10px" className="stackNavbar">
          <Link to="/" className="customLink">
            {t("Home")}
          </Link>
          <Link to="tips" className="customLink">
            {t("Advices")}
          </Link>
        </Stack>
      </Box>  
      <Box sx={{mr:3}}>
        <LangageSwitcher />
      </Box>
    </Box>
  );
};

export default Navbar;
