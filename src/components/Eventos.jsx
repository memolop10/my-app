import React,{ useState } from 'react'

const Eventos = () => {
 //ESTADO ACTUAL   //FUNCION QUE ACTUALIZARA EL ESTADO
    const [ texto, setTexto ] = useState('texto desde el estado');

    const eventoClick = () => {
        console.log('me diste click');
        setTexto('TEXTO CAMBIADO');
    }
    return (
        <>
            <hr/>
            <h2>{ texto }</h2>
            <button onClick={ () => eventoClick() }>click</button>
        </>
    )
}

export default Eventos
