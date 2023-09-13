import React from 'react';


function Busqueda() {
   
   

    const arr = [{elemento : "sobre nosotros"}, {elemento : "pagina principal"}, {elemento : "mercancia"},];

    for(let i = 0; i < 2; i++) {
        
    }
    return(
        <div>
        {arr.map (objeto => 
             <p key={objeto.elemento}>{'{objeto.elemento}'}</p>)}
   
            
        </div>

    );
        
}

export default Busqueda;