import React from "react";
import "./assets/estilos/App.css";
import { Route, Routes } from "react-router-dom";
import Edificio from "./components/Edificio";
import Mapa from "./components/Mapa";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mapa />} />
        <Route path="/Edificio" element={<Edificio />} />
      </Routes>
    </>
  );
}
export default App;
