import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import "../assets/estilos/Informacion.css";

const IMAGENES = require.context("../assets/fotos", true);
export default function Edificio() {
  const location = useLocation();
  const { selectPosition } = location.state;
  return (
    <div className="BaseInformacion">
      <div className="SeccionDeSeleccion">
        <div className="NombreEdificio">
          <p>{selectPosition.ident}</p>
        </div>
        <div className="Lista">
          <List>
            {selectPosition.pisos.map((item) => {
              return (
                <div key={item?.numero} className="NombreSalas">
                  <ListItem button>
                    <ListItemText primary={item?.numero} />
                  </ListItem>
                </div>
              );
            })}
          </List>
        </div>
      </div>
      <div className="SeccionDeInformacion">
        <div className="SeccionDeFotos">
          <img
            src={IMAGENES(`./${selectPosition?.informacion.foto}.jpg`)}
            alt={selectPosition?.informacion.foto}
          />
        </div>
        <div className="TextoInformacion">
          <div className="InformacionSeleccionada">
            <p>{selectPosition.informacion.texto}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
