import React from 'react'
import styles from './Club.module.css'

export default function Club({name, description, state, link}){

    const buttonText = state ? 'Retirarme' : 'Subscribirme';

    return (
        <div className={styles.card}>
            <h1 className={styles.name}>{name}</h1>
            <h3 className={styles.desc}>{description}</h3>
            <div className={styles.more}>
            <button className='btn btn-outline-light'>{buttonText}</button>
           
            <a className={styles.link} href={link}>Más info</a>
            </div>
        </div>


    )


}