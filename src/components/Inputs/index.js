import "./Inputs.css";

const Inputs = (props) => {
    // console.log("Datos: ",props);
    // const [valor, actualizarValor] = useState("");
    const placeHolderModificado = `${ props.placeholder }...`;

    // Destructuración
    const { type = "text" } = props

    const manejarCambio = (e) => {
        // console.log("Cambio", e.target.value);
        props.actualizarValor(e.target.value);
    }
    return <div className={`inputs inputs-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeHolderModificado} 
            required = { props.required } 
            value={ props.valor } 
            onChange={ manejarCambio }
            type={ type }
        />
    </div>
}

export default Inputs;