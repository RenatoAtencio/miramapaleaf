import React from "react";
import { Link } from "react-router-dom";
import "../assets/estilos/Targeta.css";

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
            Ir!
          </Link>
        </div>
        <div className="TargetaInformacion">
          <p>{selectPosition?.informacion.texto}</p>
        </div>
        <div className="Fotos">
          <p>{selectPosition?.informacion.foto}</p>
        </div>
      </div>
    );
  }
}
