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
  const [Sala, setSala] = useState(null);

  if (Sala === null) {
    return (
      <div className="BaseInformacion">
        <div className="EdificioListaInfo">
          <div className="NombreEdificio">
            <p>{selectPosition.ident}</p>
            <p>{selectPosition.nombre}</p>
          </div>
          <div className="ListaSalas">
            <List>
              {selectPosition.pisos.map((item) => {
                return (
                  <div key={item?.numero} className="NombreSalas">
                    <ListItem
                      button
                      onClick={() => {
                        setSala(item);
                      }}
                    >
                      <ListItemText primary={item?.numero} />
                    </ListItem>
                    <Divider />
                  </div>
                );
              })}
            </List>
          </div>
          <div className="InformacionSeleccionada">
            <p>{selectPosition.informacion.texto}</p>
          </div>
        </div>
        <div className="SeccionDeFotos">
          <img
            src={IMAGENES(`./${selectPosition?.informacion.foto}.jpg`)}
            alt={selectPosition?.informacion.foto}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="BaseInformacion">
        <div className="EdificioListaInfo">
          <div className="NombreEdificio">
            <p>{selectPosition.ident}</p>
            <p>{selectPosition.nombre}</p>
          </div>
          <div className="ListaSalas">
            <List>
              {selectPosition.pisos.map((item) => {
                return (
                  <div key={item?.numero} className="NombreSalas">
                    <ListItem
                      button
                      onClick={() => {
                        setSala(item);
                      }}
                    >
                      <ListItemText primary={item?.numero} />
                    </ListItem>
                    <Divider />
                  </div>
                );
              })}
            </List>
          </div>
          <div className="InformacionSeleccionadaSala">
            <div>
              <p>Informacion Sala {Sala.numero}</p>
            </div>
            <div className="InformacionSala">
              <p>{Sala.informacion}</p>
            </div>
          </div>
        </div>
        <div className="SeccionDeFotos">
          <img src={IMAGENES(`./${Sala?.foto}.jpg`)} alt={Sala?.foto} />
          <img
            src={IMAGENES(`./${selectPosition?.informacion.foto}.jpg`)}
            alt={selectPosition?.informacion.foto}
          />
        </div>
      </div>
    );
  }
}
