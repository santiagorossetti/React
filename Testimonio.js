import React from 'react';

function Testimonio() {
  return (
<div className='contenedor-testimonio'>
    <img
     className='imagen-testimonio'
     src={require('.//imagenes/Papu-teochilla.JPG')}
     alt='foto del goat teo'/>
    <div className='contenedor-texto'>
      <p claassName='nombre-testimonio'>teo chillabert en Argentina</p>
      <p className='cargo-testimonio'>goleador del fulbito</p>
      <p className='texto-tesstimonio'>"Soy demasiado crack y thiago ahustin Fuertes, junto a nagito con el chorcho y marian me pueden tocar los cojones"</p>
    </div>
</div>
  );
}

export default Testimonio;