import { useState } from "react";
import "./Form.css";
import Inputs from "../Inputs";
import ListOptions from "../ListOptions";
import Button from "../Button";

const Form = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envío");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEnvio = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario: color });
    }

    return <section className="form">
        <form onSubmit={ manejarEnvio }>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Inputs 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={ nombre } 
                actualizarValor={ actualizarNombre }
            />
            <Inputs 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={ puesto } 
                actualizarValor={ actualizarPuesto }
            />
            <Inputs 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={ foto } 
                actualizarValor={ actualizarFoto }
            />
            <ListOptions 
                valor={ equipo } 
                actualizarEquipo={ actualizarEquipo } 
                equipos={ props.equipos }
            />
            <Button>
                Crear
            </Button>
        </form>
        <form onSubmit={ manejarNuevoEnvio }>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Inputs 
                titulo="Título" 
                placeholder="Ingresar título" 
                required 
                valor={ titulo } 
                actualizarValor={ actualizarTitulo }
            />
            <Inputs 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required valor={ color } 
                actualizarValor={ actualizarColor }
                type="color"
            />
            <Button>
                Registrar Equipo
            </Button>
        </form>
    </section>
}

export default Form;