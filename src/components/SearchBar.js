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
      <div className="dropdown">
        <List>
          {Edificios.filter((item) => {
            const lugarBuscado = searchText.toLowerCase();
            const edificioBuscado = item.ident.toLowerCase();
            {
              /*const salaBuscada = item.ident.pisos.numero.toLowerCase();*/
            }
            return (
              lugarBuscado &&
              edificioBuscado.startsWith(lugarBuscado) &&
              edificioBuscado !== lugarBuscado
            );
          })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={(event) => {
                  setSearchText(event.target.value);
                }}
                className="dropdown-row"
                key={item.ident}
              >
                {item.ident}
              </div>
            ))}
        </List>
      </div>
    </div>
  );
}
/**
 * export default function App() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="App">
      <h1>Search</h1>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.ident.toLowerCase();
              const sas = item.wea.toLowerCase();

              return (
                searchTerm &&
                (sas.startsWith(searchTerm) ||
                  fullName.startsWith(searchTerm)) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.ident)}
                className="dropdown-row"
                key={item.ident}
              >
                {item.ident}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
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



 */
