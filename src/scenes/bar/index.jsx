import React from "react";
import { Header } from "../../components/Header";
import { BarChart } from "../../components/BarChart";
import { Box } from "@mui/material";

export const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subTitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};
