import React from "react";
import "./assets/estilos/App.css";
import { Route, Routes } from "react-router-dom";
import Edificio from "./components/Edificio";
import Mapa from "./components/Mapa";

function App() {
  return (
    /** element corre el codigo puesto, en este caso cuando se comienza
     * a correr la app se comienza con la dirrecion "/"
     */
    <Routes>
      <Route path="/" element={<Mapa />} />
      <Route path="/Edificio" element={<Edificio />} />
    </Routes>
  );
}
export default App;
