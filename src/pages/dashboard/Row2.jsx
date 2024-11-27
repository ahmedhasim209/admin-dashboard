import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../pages/lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

export default function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={"20px"}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={3}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={3}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton
              sx={{
                // @ts-ignore
                color: theme.palette.primary,
                mr: 3,
                width: 30,
                height: 30,
              }}
            >
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>
      <Box
        sx={{
          flexGrow: 1,
          maxHeight: 380,
          minWidth: "280px",
          overflow: "auto",
        }}
      >
        <Paper>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: "bold",
              p: 1.2,
            }}
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: "10px",
                mt: "10px",
              }}
            >
              <Stack direction={"column"} textAlign={"left"}>
                <Typography sx={{ fontWeight: "bold" }} variant="body2">
                  {item.txId}
                </Typography>
                <Typography variant="body2"> {item.user}</Typography>
              </Stack>
              <Typography variant="body2">{item.date}</Typography>
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: "#FF5336",
                  color: theme.palette.primary,
                  p: " 6px 8px",
                  borderRadius: "5px",
                }}
              >
                {`$ ${item.cost}`}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
