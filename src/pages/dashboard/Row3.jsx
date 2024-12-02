import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/pieChart/Pie";
import Bar from "../../pages/barChart/Bar";
import Geography from "../../pages/geography/Geography";

export default function Row3() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{
        mt: "20px",
        gap: 1.5,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap ",
      }}
    >
      <Paper sx={{ minWidth: "400px", width: "32%", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ p: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={600}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography sx={{ textAlign: "center", mt: "15px" }} variant="h6">
          $48,352 revennue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expanditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ minWidth: "400px", width: "32%", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ p: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={600}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>

      <Paper sx={{ minWidth: "400px", width: "32%", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ p: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={600}
        >
          Geography Based Traffic
        </Typography>
        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  );
}
