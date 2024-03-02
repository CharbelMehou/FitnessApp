import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { useTranslation } from "react-i18next";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const { t } = useTranslation();

  const styleDeBase = {
    background: "#fff",
    borderBottomLeftRadius: "20px",
    width: "270px",
    height: "282px",
    cursor: "pointer",
    gap: "47px",
  };

  const styleActif = bodyPart === item ? { borderTop: "4px solid #FF2625" } : {};

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="glass-card"
      sx={{ ...styleDeBase, ...styleActif }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Helvetica, Arial, sans-serif"
        color="red"
        textTransform="capitalize"
      >
        {t(item)}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
