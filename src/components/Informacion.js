import React from "react";
import { Link } from "react-router-dom";
import "../assets/estilos/Targeta.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Informacion(props) {
  const { selectPosition } = props;
  if (selectPosition?.ident === undefined) {
    return (
      <div className="TargetaInformacionVacia">
        <p>Busca un edificio</p>
      </div>
    );
  } else {
    return (
      <div className="TargetaInformacionEdificio">
        <div className="EdificioLink">
          <div className="TargetaNombreEdificio">
            <p>{selectPosition?.ident}</p>
            <p>Lista de las salas:</p>
          </div>
          <div className="TargetaLinkEdificio">
            <Link to="/Edificio" state={{ selectPosition }}>
              Informacion 
            </Link>
          </div>
        </div>
        <div className="ListaDeSalasEdificio">
          <List>
            {selectPosition.pisos.map((item) => {
              return (
                <div key={item?.numero}>
                  <ListItem>
                    <ListItemText primary={item?.numero} />
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
}