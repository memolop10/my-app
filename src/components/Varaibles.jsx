import React from 'react'

const Varaibles = () => {

const miVariable = 'Variables';
const imagen = 'https://i.etsystatic.com/18352349/r/il/233067/1645077843/il_794xN.1645077843_o0ju.jpg'
    return (
        <div>
            <h3>nuevo Componente {miVariable}</h3>
            <img src={imagen} alt="link "/>
        </div>
    )
}

export default Varaibles
