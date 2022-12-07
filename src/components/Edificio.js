import React from "react";
import { useLocation } from "react-router-dom";

export default function Edificio() {
  const location = useLocation();
  const { selectPosition } = location.state;

  console.log(selectPosition);
  return (
    <div>
      <h1 className="titulo">{selectPosition?.ident}</h1>
      <p>{selectPosition?.informacion.texto}</p>
    </div>
  );
}
