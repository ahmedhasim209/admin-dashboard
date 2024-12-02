import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import Header from "../../components/Header";

export default function Invoices() {
  return (
    <Box>
      <Header Title="INVOICES" subTitle="List of Invoice Balances" />
      <Box sx={{ mx: "auto", alignItems: "center", height: 579, width: "90%" }}>
        <DataGrid
          checkboxSelection
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
