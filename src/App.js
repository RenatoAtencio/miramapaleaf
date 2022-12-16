import React from "react";
import "./assets/estilos/App.css";
import { Route, Routes } from "react-router-dom";
import Edificio from "./components/Edificio";
import Mapa from "./components/Mapa";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <nav className="IconoNavegador">
          <Link to="/">
            <img alt="logo" />
          </Link>
        </nav>
        <h1 className="TituloNavegador">MiraMapa</h1>
      </header>
      <Routes>
        <Route path="/" element={<Mapa />} />
        <Route path="/Edificio" element={<Edificio />} />
      </Routes>
    </>
  );
}
export default App;
