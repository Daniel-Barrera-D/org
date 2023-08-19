import './Collaborator.css';
import { TiDelete } from 'react-icons/ti'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Collaborator = (props) => {

    const { nombre, puesto, foto, id, fav } = props.datos
    const { colorPrimario, deleteCollaborator, like } = props;

    return <div className='collaborator'>
        <TiDelete onClick={ () => deleteCollaborator(id) } className='delete'/>
        <div className='header' style={ {backgroundColor: colorPrimario} }>
            <img src={ foto } alt={ nombre }/>
        </div>
        <div className='info'>
            <h4>{ nombre }</h4>
            <h5>{ puesto }</h5>
            { fav  ? <AiFillHeart color='red' onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/> }
        </div>
    </div>
}

export default Collaborator;