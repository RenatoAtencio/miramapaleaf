import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Informacion from "./Informacion";
import MapView from "./MapView";
import Horario from "./Horario";
import "../assets/estilos/App.css";

export default function Mapa() {
  const [selectPosition, setSelectPosition] = useState(null);
  return (
    <div className="BasePaginaInicial">
      <div className="BusquedaInicial">
        <SearchBar
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
        />
      </div>
      <div className="InformacionInicial">
        <div className="VistaDelMapa">
          <MapView selectPosition={selectPosition} />
        </div>
        <div className="VistaEdificioHorario">
          <div className="VistaEdificio">
            <Informacion selectPosition={selectPosition} />
          </div>
          <div className="VistaHorario">
          <Horario/>
          </div>
        </div>
      </div>
    </div>
  );
}
/**
 * const [selectPosition, setSelectPosition] = useState(null);

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
          <Horario/>
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
 */
