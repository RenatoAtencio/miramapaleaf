import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Informacion from "./Informacion";
import MapView from "./MapView";
import "../assets/estilos/App.css";

export default function Mapa() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    /** Esta es la base de la app, es principalmente
     * la base de la pagina, a travez de aqui se llaman
     * a los componente de la app.
     */
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
