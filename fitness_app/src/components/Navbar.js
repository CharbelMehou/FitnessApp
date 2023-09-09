import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import Logo from "../assets/images/Logo1.png";
import LangageSwitcher from "./langageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: { sm: "123px", xs: "40px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: { xs: "50/%", lg: "100%" },
        }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ maxWidth: "150px", maxHeight: "50px", margin: "0px 20px" }}
          />
        </Link>
        <Stack
          direction="row"
          gap="20px"
          fontFamily="Alegreya"
          fontSize="20px"
          alignItems="flex-end"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            {t("Home")}
          </Link>
          <Link
            to="tips"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            {t("Advices")}
          </Link>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", lg: "flex-end" },
            mt: 2,
          }}
        >
          <LangageSwitcher />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
