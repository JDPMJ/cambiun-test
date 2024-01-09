import { Input } from "@/components/ui/input";
import { Button, Modal, Typography, Box, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import RedditTextField from "./RedditTextField";
import { useRouter } from "next/navigation";
import { RiAddBoxLine, RiAddLine } from "react-icons/ri";
import { useCountry } from "../context/CountryContex";
import { EditIcon } from "lucide-react";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  //border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4
};

interface Props {
  variant: string;
  country?: {
    id: string;
    name: string;
    time_zone: string;
  };
}

export default function DialogData({ variant, country }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [countryName, setCountryName] = useState("");
  const [countryTimeZone, setCountryTimeZone] = useState("");
  const {addCountry, loadCountry, editCountry} = useCountry();

  async function handleSubmit() {
    if (variant == "add") {
      await addCountry({
        name: countryName,
        timeZone: countryTimeZone
      });
    } else {
      await editCountry({
        id: country!.id,
        name: countryName,
        timeZone: countryTimeZone
      });
    }
    handleClose();
  }

  async function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value != "") {
      await loadCountry(e.target.value);
    } else {
      await loadCountry("");
      console.log("Valor Vacío");
    }
  }

  useEffect(() => {
    if (country) {
      setCountryName(country.name);
      setCountryTimeZone(country.time_zone);
    }
  }, []);

  return (
    <div>
      {variant == "add" ? (
        <div className="flex gap-x-2 items-center justify-between mb-2">
          <div className="text-black flex-1">
            <div className="grid grid-cols-4">
              <Input onChange={(e) => handleSearch(e)} type="text" placeholder="Buscar..." />
            </div>
          </div>
          <Button onClick={handleOpen}>
            <div className="flex gap-x-2 items-center">
              <RiAddBoxLine />
              Agregar
            </div>
          </Button>
        </div>
      ) : (
        <Button variant="outlined" onClick={handleOpen} style={{ marginRight: 4 }} color="success"><EditIcon /></Button>
      )}
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {variant == "add" ? "Agregar País" : "Editar País"}
        </DialogTitle>
        <DialogContent>
          <form>
            <div className="mt-1 mb-4">
              <RedditTextField error={false} helperText={""} value={countryName} onChange={(e) => setCountryName(e.target.value)} label="Nombre" variant="filled" fullWidth />
            </div>
            <div className="">
              <RedditTextField value={countryTimeZone} onChange={(e) => setCountryTimeZone(e.target.value)} label="Zona Horaria" variant="filled" fullWidth />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>{variant == "add" ? "Agregar" : "Editar"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}