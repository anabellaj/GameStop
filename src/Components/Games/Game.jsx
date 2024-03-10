import styles from './Game.module.css'
import React, {useState} from "react";


export default function Game({nombre,  genero, descripcion, fave, onLike}){
    
    
    const favorite = fave ? 'Quitar Favorito' : 'Agregar Favorito';

    
    const handleLike = async () => {
        onLike(nombre, !fave);
      };



    return(
        <div className={styles.container}>
            <h1 className={styles.nombre}>{nombre}</h1>
            <h6 className={styles.genero}>{genero}</h6>
            <h4 className={styles.desc}>{descripcion}</h4>
            <button className='btn btn-outline-light' onClick={handleLike}>{favorite}</button>
        </div>

    )

}