import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      type: "number",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "phone",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      type: "number",
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              display: "flex",
              p: "5px",
              width: "80px",
              borderRadius: "5px",
              alignItems: "center",
              justifyContent: "space-evenly",
              textAlign: "center",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#00897b",
              mt: "7.5px",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "white" }}
                fontSize="small"
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "white" }} fontSize="small" />
            )}
            {access === "User" && (
              <LockOpenOutlined fontSize="small" sx={{ color: "white" }} />
            )}
            <Typography sx={{ fontSize: "13px", color: "white" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Header Title={"TEAM"} subTitle={"Managing the Team Members"} />
      <Box sx={{ mx: "auto", alignItems: "center", height: 579, width: "90%" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
}
