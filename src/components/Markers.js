import { marker } from "leaflet";
import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";

const Markers = () =>{
  return (<Marker position={[-39.832381,-73.243886]}></Marker>)
}



/*const Markers = (props) =>{
  const {places} = props;
  const markers = places.map((place,i)=>(
      <Marker 
        key={i}
        position={place.marcador} 
        icon={IconLocation}
      />
  ))
  return (markers);
};*/




export default Markers;