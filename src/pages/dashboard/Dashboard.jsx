import { Box, Button, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Header
          isDashboard={true}
          Title={"Dashboard"}
          subTitle={"Welcome to your dashboard"}
        />
        <Box sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "capitalize", p: "6px 8px" }}
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}
