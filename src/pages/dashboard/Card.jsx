import { Box, Paper, Stack, Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

export default function Card({
  // eslint-disable-next-line react/prop-types
  icon,
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  subTitle,
  // eslint-disable-next-line react/prop-types
  data,
  // eslint-disable-next-line react/prop-types
  increase,
  // eslint-disable-next-line react/prop-types
  scheme,
}) {
  return (
    <Paper
      sx={{
        minWidth: "333px",
        display: "flex",
        justifyContent: "space-between",
        p: 1.5,
      }}
    >
      <Stack direction={"column"} sx={{ gap: 1 }}>
        {icon}
        <Typography>{title}</Typography>
        <Typography>{subTitle}</Typography>
      </Stack>
      <Stack direction={"column"} textAlign={"center"}>
        <Box sx={{ height: "60px", width: "60px" }}>
          <ResponsivePie
            data={data}
            margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
            innerRadius={0.7}
            colors={{ scheme: scheme }}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
          />
        </Box>
        <Typography>{increase}</Typography>
      </Stack>
    </Paper>
  );
}
