import React from "react";
import '../css/Restaurantes.css';


function Restaurantes(props){
    return(
        <div className= 'contenedor-restaurante'> 
            
            <div className='contenedor-texto-restaurante'>
              <img className = 'imagen-restaurante' src={require(`../imagenes/${props.imagen}`)}/>
              <p className='nombre-restaurante'><strong>{props.nombre}</strong></p>
              <p className='direccion-restaurante'>{props.direccion}</p>
              <p className='ciudad-restaurante'><strong>{props.ciudad}</strong></p>
              <p className='descripcion-restaurante'>{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Restaurantes;