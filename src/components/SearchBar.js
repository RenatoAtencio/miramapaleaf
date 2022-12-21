import React, { useState } from "react";
import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Edificios from "../data/data.json";
import "../assets/estilos/App.css";

export default function SearchBar(props) {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  return (
    <div className="MenuDeBusqueda">
      <div className="BarraBoton">
        <div className="InputBusqueda">
          <OutlinedInput
            style={{ width: "100%" }}
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div className="BotonBusqueda">
          <Button variant="contained">Buscar</Button>
        </div>
      </div>
      <div className="ListaEdificios">
        <List>
          {Edificios.filter((item) => {
            const lugarBuscado = searchText.toLowerCase();
            const edificioBuscado = item.ident.toLowerCase();
            const nombreEdificioBuscado = item.nombre.toLowerCase();
            return (
              lugarBuscado &&
              (edificioBuscado.startsWith(lugarBuscado) ||
                nombreEdificioBuscado.startsWith(lugarBuscado)) &&
              edificioBuscado !== lugarBuscado
            );
          })
            .slice(0, 30)
            .map((item) => (
              <div>
                <ListItem
                  className="dropdown-row"
                  key={item.ident}
                  button
                  onClick={() => {
                    setSelectPosition(item);
                  }}
                >
                  <ListItemText primary={`${item?.ident} | ${item?.nombre}`} />
                </ListItem>
                <Divider />
              </div>
            ))}
        </List>
      </div>
    </div>
  );
}
