import React from "react";
import { Link } from "react-router-dom";
import "../assets/estilos/Targeta.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Informacion(props) {
  const { selectPosition } = props;

  /**Esta parte es para la targeta de informacion que cambia segun
   * el edificio seleccionado, hay un if para que cuando se comienze
   * la app muestre una targeta de base, luego de eso se actualiza
   * cada vez que se selecciona un edificio nuevo
   */
  if (selectPosition?.ident === undefined) {
    return (
      <div className="TargetaVacia">
        <p>Selecciona o busca una sala o edificio</p>
      </div>
    );
  } else {
    return (
      <div className="Targeta">
        <div className="TargetaTitulo">
          <h4>{selectPosition?.ident}</h4>
        </div>
        <div className="LinkPagina">
          <Link to="/Edificio" state={{ selectPosition }}>
            Informacion del Edificio
          </Link>
        </div>
        <div className="InformacionSalas">
          <div className="TituloInformacionSalas">
            <h4>Salas en el edificio</h4>
          </div>
          <div className="ListaDeLasSalas">
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
      </div>
    );
  }
}
