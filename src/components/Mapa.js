import React, { useState } from "react";
import "../App.css";
import MapView from "./MapView";
import SearchBar from "./SearchBar";
import Informacion from "./Informacion";

export default function Mapa() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div className="Base">
      <div className="Buscador">
        <SearchBar
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
        />
      </div>
      <div className="Informacion-Horario">
        <div className="Horario">
          <h4>Horario</h4>
        </div>
        <div className="Informacion">
          <Informacion selectPosition={selectPosition} />
        </div>
      </div>
      <div className="Mapa">
        <MapView selectPosition={selectPosition} />
      </div>
    </div>
  );
}
