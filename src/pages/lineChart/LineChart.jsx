import { Box } from "@mui/material";
import Line from "./Line";
import Header from "../../components/Header";

export default function LineChart() {
  return (
    <Box>
      <Header Title="Line Chart" subTitle="Simple Line Chart" />
      <Line />
    </Box>
  );
}
