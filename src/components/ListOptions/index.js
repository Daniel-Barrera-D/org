import './ListOptions.css'

const ListOptions = (props) => {

    // Método map -> arreglo.map( (equipo, index) => {
    //      return <option></option>
    // } )

    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value);
    }

    return <div className='list-options'>
        <label>Equipo</label>
        <select value={ props.valor } onChange={ manejarCambio }>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map( (equipo, index) => <option key={index} value={ equipo }>{ equipo }</option>)}
        </select>
    </div>
}


export default ListOptions;