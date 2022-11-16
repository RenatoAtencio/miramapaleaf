import L from "leaflet";

export const IconLocation = L.icon({
  iconUrl:require("../assets/markerIcon.svg"),
  iconRetinaUrl: require("../assets/markerIcon.svg"),
  iconAnchor:null,
  shadowAnchor:null,
  shadowUrl:null,
  shadowSize:null,
  iconSize:[35,35],
  className:"Icono para marcar",
});