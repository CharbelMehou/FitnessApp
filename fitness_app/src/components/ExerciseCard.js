import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ExerciseCard = ({ exercise }) => {
  const { t } = useTranslation();
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#CC5200",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {t(exercise.bodyPart)}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#E59F71",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {t(exercise.target)}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
