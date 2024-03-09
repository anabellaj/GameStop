import styles from './Game.module.css'
export default function Game({nombre, genero, descripcion, fave}){
    const favorite = fave ? 'Agregar Favorito' : 'Quitar Favorito';

    return(
        <div className={styles.container}>
            <h1 className={styles.nombre}>{nombre}</h1>
            <h6 className={styles.genero}>{genero}</h6>
            <h4 className={styles.desc}>{descripcion}</h4>
            <button className='btn btn-outline-light'>{favorite}</button>
        </div>

    )

}