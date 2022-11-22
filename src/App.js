import React,{useState} from 'react';
import './App.css';
import MapView from './components/MapView';
import SearchBar from './components/SearchBar';

function App() {
  const [selectPosition,setSelectPosition]=useState(null);
  console.log(selectPosition);

  return (
    <div className='Base'>
      <div className='Horario'>
        <h4>Horario</h4>
      </div>
      <div className='Titulo'>
        <h4>Titulo</h4>
      </div>
      <div className='Buscador'>
        <SearchBar selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
      </div>
      <div className='Mapa'>
        <MapView selectPosition={selectPosition} />
      </div>
    </div>
  );
}
export default App;