import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import Header from "../../components/Header";

export default function Contacts() {
  return (
    <Box>
      <Header
        Title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <Box sx={{ mx: "auto", alignItems: "center", height: 579, width: "90%" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
}
