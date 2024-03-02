import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollBar";
import { useTranslation } from "react-i18next";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );

        // Ajout d'une vérification pour s'assurer que bodyPartsData est un tableau
        if (Array.isArray(bodyPartsData)) {
          setBodyParts(["all", ...bodyPartsData]);
        } else {
          console.error("API did not return an array");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Box className="circle-shadow search-exercise"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "33px" }, textAlign: "center", mb:3 }}
      >
        {t("awesome-exercises-you")}
        <br />
        {t("should-try")}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }} >
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
            mr:1
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder={t("Search Exercises")}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            borderRadius:"40px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          <SearchIcon />
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Box>
  );
};

export default SearchExercises;
