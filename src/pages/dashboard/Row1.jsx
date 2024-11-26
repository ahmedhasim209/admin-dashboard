import { Box, Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

export default function Row1() {
  const theme = useTheme();
  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{
          gap: 2.5,
          pt: "20px",
          flexWrap: "wrap",
        }}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        <Card
          icon={
            <EmailIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"12.361"}
          subTitle={"Emails Sent"}
          increase={"+14%"}
          data={data1}
          scheme={"nivo"}
        />
        <Card
          icon={
            <PointOfSaleIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"431,225"}
          subTitle={"Sales Obtained"}
          increase={"+21%"}
          data={data2}
          scheme={"category10"}
        />
        <Card
          icon={
            <PersonAddIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"32,441"}
          subTitle={"New Clients"}
          increase={"+5%"}
          data={data3}
          scheme={"accent"}
        />
        <Card
          icon={
            <TrafficIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          title={"1,325,134"}
          subTitle={"Traffic Received"}
          increase={"+43%"}
          data={data4}
          scheme={"dark2"}
        />
      </Stack>
    </Box>
  );
}
