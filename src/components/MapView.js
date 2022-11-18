import React from "react"
import {MapContainer,Marker,TileLayer,Popup} from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import edif from "../data/data.json"


const markerIcon = new L.icon({
  iconUrl:require("../assets/Marker.png"),
  iconSize:[35,35],
  iconAnchor:null,
})

const MapView = () => {
  return <MapContainer center={[-39.831742, -73.246750]} zoom={16}> 
    <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    
    {edif.map((edif,idx)=>
      <Marker 
        position={[edif.marcador.lat,edif.marcador.lng]} 
        icon={markerIcon}
        key={idx}
      >
      </Marker>
    )}


  </MapContainer>
}

export default MapView