import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../assets/estilos/App.css";

/** Esto es para el icono, solo selecciona la imagen y define el tamaño */
const markerIcon = new L.icon({
  iconUrl: require("../assets/Marker.png"),
  iconSize: [35, 35],
  iconAnchor: [20, 35],
});

/**Esta funcion es la que mueve y muestra en el mapa al seleccionar
 * un edificio nuevo
 */
function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();
  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.marcador.lat, selectPosition?.marcador.lng),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition]);
  return null;
}

export default function MapView(props) {
  const { selectPosition } = props;
  const locationSelection = [
    selectPosition?.marcador.lat,
    selectPosition?.marcador.lng,
  ];
  
  return (
    /**MapContainer y TileLayer crean el mapa, ambos son necesarios para que se muestre el mapa
     * ademas se le tiene que dar un alto y largo al mapa (lo cual se hiso en el App.css), tambien 
     * acciones que ocuren en el mapa se deben poner dentro del MapContainer, como el ResetCenterView
     */
    <MapContainer className="Mapa" center={[-39.831742, -73.24675]} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectPosition && (
        <Marker position={locationSelection} icon={markerIcon}>
          <Popup>Edificio</Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}
