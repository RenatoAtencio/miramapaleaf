import React, { useEffect } from "react"
import {MapContainer,Marker,TileLayer,Popup,useMap} from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const markerIcon = new L.icon({
  iconUrl:require("../assets/Marker.png"),
  iconSize:[35,35],
  iconAnchor:[20, 35],
})

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();
  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.marcador.lat, selectPosition?.marcador.lng),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition]);  
  return null;
}

export default function MapView(props){
  const {selectPosition}=props;
  const locationSelection = [selectPosition?.marcador.lat, selectPosition?.marcador.lng];

  return(
    <MapContainer className="Mapa" center={[-39.831742, -73.246750]} zoom={16}>
      <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
      {selectPosition && (
        <Marker position={locationSelection} icon={markerIcon}>
          <Popup>
            Edificio
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  )
}
