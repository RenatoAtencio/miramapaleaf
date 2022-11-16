import React from "react"
import {MapContainer,TileLayer} from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import Markers from "./Markers"
import edifInfo from "../data/data.json"

const MapView = () => {
  return <MapContainer center={[-39.831742, -73.246750]} zoom={16}> 
    <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Markers edif={edifInfo.edif}/>
  </MapContainer>
}

export default MapView