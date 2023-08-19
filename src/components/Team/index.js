import Collaborator from '../Collaborator';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {

    //Destructuración
    const { colorPrimario, titulo, id } = props.data;
    const { collaborators, deleteCollaborator, actualizarColor, like } = props;

    const estiloSeccion = { backgroundColor: hexToRgba(colorPrimario, 0.5) };

    const estiloTitulo = { borderColor: colorPrimario };

    // console.log(collaborators.length > 0);

    return <>
    { collaborators.length > 0 && 
        <section className='team' style={ estiloSeccion } >
            <input
                type='color'
                className='input-color'
                value={ colorPrimario }
                onChange={ (e) => {
                    actualizarColor(e.target.value, id);
                } }
            />
            <h3 style={ estiloTitulo }>{ titulo }</h3>
            <div className='collaborators'>
                {
                    collaborators.map( (colaborador, index) => <Collaborator 
                        datos={ colaborador } 
                        key={ index } 
                        colorPrimario={ colorPrimario } 
                        deleteCollaborator={ deleteCollaborator }
                        like = { like }
                    /> )
                }
            </div>
        </section>
    }</>
}

export default Team;