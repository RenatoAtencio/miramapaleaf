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
    /**Seccion de la busqueda de salas */
    <div className="MenuDeBusqueda">
      {/**Esta parte es el input con el boton, para ambos
        se estan usando componentes de mui (parecido a chakra) */}
      <div className="BarraBoton">
        <div>
          <OutlinedInput
            style={{ width: "100%" }}
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div>
          <Button variant="contained">Buscar</Button>
        </div>
      </div>
      {/**Esta parte es para la lista de los edificios,
          hay una funcion que recorre el json y crea items (que son los edifios)
          y les asigna el nombre (ident) del edificio */}
      <div>
        <List>
          {Edificios.map((item) => {
            return (
              <div key={item?.ident}>
                <ListItem
                  button
                  onClick={() => {
                    setSelectPosition(item);
                  }}
                >
                  <ListItemText primary={item?.ident} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    </div>
  );
}
