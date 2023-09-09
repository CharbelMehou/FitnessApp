import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import TipsItem from "./TipsItem";
import { useTranslation } from "react-i18next";

const Tips = () => {
  const [goal, setGoal] = useState("WeigthLoss");

  const { t } = useTranslation();
  return (
    <Box
      id="tips"
      sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button
          sx={{
            bgcolor: goal === "WeigthLoss" ? "#FF2625" : "#808080",
            color: "#fff",
          }}
          onClick={() => setGoal("WeigthLoss")}
        >
          {t("weight-loss")}
        </Button>

        <Box>
          <Button
            sx={{
              bgcolor: goal === "GainMuscle" ? "#FF2625" : "#808080",
              color: "#fff",
            }}
            onClick={() => setGoal("GainMuscle")}
          >
            {t("GainMuscle")}
          </Button>
        </Box>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1, mb: 2 }}>
          <Typography sx={{ fontFamily: "Alegreya", fontSize: "24px" }}>
            {t("tips-here")}{" "}
            <span
              style={{
                fontFamily: "Alegreya",
                fontWeight: "bold",
                fontSize: "24px",
                color: "#FF2625",
              }}
            >
              {" "}
              {goal === "GainMuscle"
                ? t("to-gain-muscle")
                : t("to-loose-Weigth")}{" "}
            </span>
          </Typography>
        </Box>
        <TipsItem
          labelTips={t("water-advice")}
          videoLink={`https://www.youtube.com/embed/o-nNW5hDWQg`}
          title={`Best Water To Drink For Your Body!`}
          videoLink2={"https://www.youtube.com/embed/dw1mdzdprfY"}
          title2={
            "Benefits of drinking water | Student Health Tips | Education"
          }
          videoLink3={"https://www.youtube.com/embed/9iMGFqMmUFs"}
          title3={
            "What would happen if you didn’t drink water? - Mia Nacamulli"
          }
          imgAlt={"water"}
        />
        {goal === "GainMuscle" ? (
          <>
            <TipsItem
              labelTips={t("rythmn-advice")}
              videoLink={`https://www.youtube.com/embed/ffiMBWq7PKY`}
              title={`How many days a week should you train?`}
              videoLink2={"https://www.youtube.com/embed/Aj2WV3ellB0"}
              title2={
                "a week of workouts, remember that every week is different"
              }
              videoLink3={"https://www.youtube.com/embed/ABBSkMNjL-Y"}
              title3={"Why Training 5 Times a Week is Best!"}
              imgAlt={"split"}
            />
            <TipsItem
              labelTips={t("food-advices")}
              videoLink={`https://www.youtube.com/embed/LfO1zrQ23Os`}
              title={`How Much Protein Do Need To Eat A Day To Maximize Your Physique?`}
              videoLink2={"https://www.youtube.com/embed/jiYr4zRYgDM"}
              title2={"5 BEST FOODS TO BUILD MUSCLE"}
              videoLink3={"https://www.youtube.com/embed/4FCleXxzo0M"}
              title3={"Can&#39;t Eat Enough To Gain Muscle? Do THIS"}
              imgAlt={"food"}
            />
          </>
        ) : (
          <>
            <TipsItem
              labelTips={t("rythmn-advice")}
              videoLink={`https://www.youtube.com/embed/vZBe8bfkmhU`}
              title={`my fat loss routine in the gym`}
              videoLink2={"https://www.youtube.com/embed/WdUlv80PsZ8"}
              title2={"My Workout Split ⚡️"}
              videoLink3={"https://www.youtube.com/embed/gmVbrqSNJNc"}
              title3={
                "Best Workout Routine For Losing Weight, According To Exercise Experts"
              }
              imgAlt={"split"}
            />

            <TipsItem
              labelTips={t("food-advices")}
              videoLink={`https://www.youtube.com/embed/CeFXrAOljb0`}
              title={`Low Calorie Meal Ideas for Weight Loss`}
              videoLink2={"https://www.youtube.com/embed/Mi_zcrCCUdM"}
              title2={"The BEST high volume foods for weight loss 🍿t"}
              videoLink3={"https://www.youtube.com/embed/YNVCXDFZa5k"}
              title3={"5 aliments à éviter pour perdre du gras ❌"}
              imgAlt={"food"}
            />
          </>
        )}
        <Typography sx={{ fontFamily: "Alegreya", fontSize: "24px" }}>
          {t("motivation-continue")}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Tips;
