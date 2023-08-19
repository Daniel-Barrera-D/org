import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState(
    [
      {
        id: uuidv4(),
        equipo: "Front End",
        foto: "https://cdn-icons-png.flaticon.com/512/4644/4644948.png",
        nombre: "Juan Devia",
        puesto: "Estudiante",
        fav: false
      },
      {
        id: uuidv4(),
        equipo: "Front End",
        foto: "https://cdn-icons-png.flaticon.com/512/4644/4644948.png",
        nombre: "Johan Barrera",
        puesto: "Estudiante",
        fav: true
      },
      {
        id: uuidv4(),
        equipo: "Programación",
        foto: "https://cdn-icons-png.flaticon.com/512/4644/4644948.png",
        nombre: "Daniel Barrea",
        puesto: "Estudiante",
        fav: true
      },
      {
        id: uuidv4(),
        equipo: "Programación",
        foto: "https://cdn-icons-png.flaticon.com/512/4644/4644948.png",
        nombre: "Luis Devia",
        puesto: "Estudiante",
        fav: false
      },
  ]);
  const [equipos, actualizarEquipos] = useState(
    [
      {
        id: uuidv4(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9f7E9"
      },
      {
        id: uuidv4(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuidv4(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuidv4(),
        titulo: "DevOps",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuidv4(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuidv4(),
        titulo: "Mobile",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuidv4(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
  ]);

  // Ternario --> condicion ? seMuestra : noSeMuestra
  // corto circuito -> condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    // console.log("Nuevo colaborador", colaborador);
    // Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  // EliminarColaborador
  const eliminarColaborador = (id) => {
    // console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    // console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
          equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    // console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]);
  }

  // Funcion para favoritos
  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })
    actualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div>
      <Header />
      {/* { mostrarFormulario ? <Form /> : <></>} */}
      { 
        mostrarFormulario && <Form
          equipos={ equipos.map( (equipo) => equipo.titulo ) } 
          registrarColaborador={ registrarColaborador }
          crearEquipo = { crearEquipo }
        />
      }

      <MiOrg cambiarMostrar = { cambiarMostrar }/>

      {
        equipos.map( (equipo) => <Team  
          data={ equipo } 
          key={ equipo.titulo }
          collaborators = { colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo ) }
          deleteCollaborator = { eliminarColaborador }
          actualizarColor = { actualizarColor }
          like = { like }
          />)
      }

      <Footer />
    </div>
  );
}

export default App;