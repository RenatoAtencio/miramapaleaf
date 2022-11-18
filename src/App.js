import React from 'react';
import './App.css';

import MapView from './components/MapView';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div class="Base">
      <div class="Barra">
        <div class="Horario">
          <h4>horario</h4>
        </div>
        <div class="Titulo">
          <h4>Mira Mapa</h4>
        </div>
        <div class="Buscador">
          <SearchBar/>
        </div>
      </div>
      <div class="Mapa">
        <MapView/>
      </div>
    </div>
  );
}

export default App;
