import Input from '../../Components/Inputs/Input'
import Game from '../../Components/Games/Game'

import styles from './Videogames.module.css'

export default function Videogames(){

    return (
        <div>
            <div className={styles.header}>
                <h1 style={{marginRight:'30px'}}>Busca tus Videojuegos Favoritos</h1>
                <Input placeholder='Busca aquí!' type='string'></Input>
            </div>
            <div className={styles.games}>
                <Game nombre='Red Dead Redemption' genero='Accion' descripcion='Juego de matanza' fave={false}></Game>
                
               

                </div>
        </div>



    )


}