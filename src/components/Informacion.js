import React from "react";
import "../assets/estilos/Targeta.css";
import { Link } from "react-router-dom";

export default function Informacion(props) {
  const { selectPosition } = props;
  console.log(selectPosition);
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
