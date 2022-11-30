import React from 'react';
import '../assets/Targeta.css'

export default function Informacion(props){
  const { selectPosition } = props;
  if (selectPosition?.ident===undefined){
    return (
      <div className='TargetaVacia'>
        <p>Selecciona o busca una sala o edificio</p>
      </div>  
    )
  }else{
    return (
    <div className='Targeta'>
      <div className='TargetaTitulo'>
        <h4>{selectPosition?.ident}</h4>
      </div>
      <div className='LinkPagina'>
        <a>link a la pagina con informacion</a>
      </div>
      <div className='TargetaInformacion'>
        <p>{selectPosition?.informacion.texto}</p>
      </div>
      <div className='Fotos'>
        <p>{selectPosition?.informacion.foto}</p>
      </div>
    </div>
  )}  
} 