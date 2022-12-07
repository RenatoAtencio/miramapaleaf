import "../assets/estilos/App.css";
import React, { useState } from "react";
import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import listPlace from "../data/data.json";

export default function SearchBar(props) {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");

  return (
    <div className="MenuDeBusqueda">
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
      <div>
        <List>
          {listPlace.map((item) => {
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
