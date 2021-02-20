import React from 'react'

const Formulario = () => {

    const [fruta,setFruta] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');

    const validacionForm = (e) =>{
        e.preventDefault();
        

        if (!fruta.trim()) {
            console.log('fruta esta vacio');
            return
        }

        if (!descripcion.trim()) {
            console.log('descripcion vacio');
            return
        }

        console.log('Validando datos...')

        e.target.reset();

        setFruta('');
        setDescripcion('');
    }

    return (
        <div>
            <h2>Hola desde el Formulario</h2>
            <form onSubmit={ validacionForm }>
                <input type="text" 
                       placeholder="Ingrese Fruta"
                       className="form-control mb-2"
                       onChange={ e => setFruta(e.target.value) }
                       />
                
                <input type="text" 
                       placeholder="Ingrese Descripcion"
                       className="form-control mb-2"
                       onChange={ e => setDescripcion(e.target.value) }
                       />
                    
                <button className="btn btn-primary btn-block" type='submit'>Agregar</button>
            </form>
        </div>
    )
}

export default Formulario
