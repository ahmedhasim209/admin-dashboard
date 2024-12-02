import { Box } from "@mui/material";
import Geography from "./Geography";
import Header from "../../components/Header";

export default function GeographyChart() {
  return (
    <Box>
      <Header Title="Geography" subTitle="Simple Geography Chart" />
      <Geography />
    </Box>
  );
}
