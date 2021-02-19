import React,{ useState } from 'react'

const Contador = () => {
    const [contador , setContador] = useState(0);

    const aumentar = () => {
        console.log('numero aumentado');
        setContador(contador+1);
    }
    return (
        <div>
           <h2>Contador</h2>
           <h3>mi numero actual:{contador}</h3>
           <h4>
               {
                   contador > 10 ? 'Tu poder supera los limites' : 'Tu poder no es suficiente'   
               }
           </h4>
           <button onClick={() => aumentar()}>Aumentar</button> 
        </div>
    )
}

export default Contador;
   
