import React from "react";
import { Box, Typography } from "@mui/material";

const TipsItem = ({
  labelTips,
  videoLink,
  videoLink2,
  videoLink3,
  title,
  title2,
  title3,
  imgAlt,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
      <Typography sx={{ fontFamily: "Alegreya", fontSize: "24px" }}>
        {labelTips}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          flexWrap: { xs: "wrap", lg: "nowrap" },
          mt: 1,
        }}
      >
        <iframe
          className="advice-video"
          src={videoLink}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          className="advice-video"
          src={videoLink2}
          title={title2}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          className="advice-video"
          src={videoLink3}
          title={title3}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default TipsItem;
