import React from "react";
import { useLocation } from "react-router-dom";

export default function Edificio() {
  const location = useLocation();
  const { selectPosition } = location.state;

  console.log(selectPosition);
  return (
    <div>
      <h4>{selectPosition?.ident}</h4>
    </div>
  );
}
