"use client";

import { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import DataTable from "./DataTable";
import { CountriesProvider } from "../context/CountryContex";
import RedditTextField from "./RedditTextField";
import { categories } from "./consttables";

const Home = () => {
  
  //const [nameTxt, setNameTxt] = useState("");

  const [viewTable, setViewTable] = useState(true);
  const [tableValue, setTableValue] = useState("");

  return (
    <CountriesProvider>
      <div className="w-full h-full">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <Autocomplete
            disablePortal
            options={categories.map(category => category.name)}
            renderInput={(params) => <RedditTextField {...params} label={"Tablas"} variant="filled" />}
            onChange={(e, value) => console.log(value)}
          />
        </div>
        <div>
          {viewTable ? (
            <DataTable />
          ) : (
            <div className="text-black">Sin selección</div>
          )}
        </div>
      </div>
    </CountriesProvider>
  );
};

export default Home;