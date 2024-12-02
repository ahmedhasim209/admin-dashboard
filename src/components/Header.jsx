import { Box, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Header({ isDashboard = false, Title, subTitle }) {
  const theme = useTheme();
  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
        variant="h5"
      >
        {Title}
      </Typography>
      <Typography variant="body2">{subTitle}</Typography>
    </Box>
  );
}
