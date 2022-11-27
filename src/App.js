import React,{useState} from 'react';
import './App.css';
import MapView from './components/MapView';
import SearchBar from './components/SearchBar';
import Informacion from './components/Informacion';

function App() {
  const [selectPosition,setSelectPosition]=useState(null);

  return (
    <div className='Base'>
      <div className='Menu'>
        <div className='TituloHorarioB'>
          <div className='BottonHorario'>
            <h4>Botton horario</h4>
          </div>
          <div className='Titulo'>
            <h4>Mira Mapa</h4>
          </div>
        </div>
        <div className='Horario'>
          <h4>Horario</h4>
        </div>
        <div className='Informacion'>
          <Informacion selectPosition={selectPosition}/>
          <h4>Informacion</h4>
        </div>
      </div>
      <div className='Buscador'>
        <SearchBar selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
      </div>
      <div className='Mapa'>
        <MapView selectPosition={selectPosition}/>
      </div>
    </div>
  );
}
export default App;