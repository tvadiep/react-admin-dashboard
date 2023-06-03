import React from "react";
import { GeographyChart } from "../components/GeographyChart";
import { Header } from "../components/Header";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

export const Geography = () => {
  const colors = tokens(useTheme().palette.mode);
  return (
    <Box m="20px">
      <Header title={"GEOGRAPHY CHART"} subTitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.gray[400]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};
