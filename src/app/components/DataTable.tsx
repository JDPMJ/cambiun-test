import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import DialogData from "./DialogData";
import { DeleteIcon, EditIcon } from "lucide-react";
import { useCountry } from "../context/CountryContex";

interface Country {
  name: string;
  timeZone: string;
}

export default function DataTable() {
  const [data, setData] = useState<Country[]>([]);
  
  const columns = useMemo<MRT_ColumnDef<Country>[]>(() => [
    {
      accessorKey: "name",
      header: "Nombre",
      size: 150
    },
    {
      accessorKey: "time_zone",
      header: "Zona Horaria",
      size: 150
    }
  ], []);

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableSorting: false,
    enableHiding: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    renderTopToolbarCustomActions: ({ table }) => (
      <div className="grid grid-cols-4 gap-4 mb-4">
        <h1 className="">Países</h1>
      </div>
    )
  });
  
  const {countries, loadCountries, deleteCountry} = useCountry();

  useEffect(() => {
    loadCountries();
    setData(countries);
  }, []);

  return (
    <div>
      <DialogData variant="add" />
      {/*<MaterialReactTable table={table} />*/}
      <Paper sx={{ width: "100%" }}>
        <TableContainer style={{ maxHeight: "70vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center"><div className="font-bold">Name</div></TableCell>
                <TableCell align="center"><div className="font-bold">Zona Horaria</div></TableCell>
                <TableCell align="center" style={{ width: 300 }}><div className="font-bold">Acciones</div></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map((country) => {
                return (
                  <TableRow hover key={country.id}>
                    <TableCell align="center">{country.name}</TableCell>
                    <TableCell align="center">{country.time_zone}</TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center">
                        <DialogData variant="edit" country={country} />
                        <Button variant="outlined" onClick={() => deleteCountry(country.id)} color="error"><DeleteIcon /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}