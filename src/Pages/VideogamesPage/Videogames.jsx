import { useEffect, useState } from 'react';
import Input from '../../Components/Inputs/Input'
import Game from '../../Components/Games/Game'

import styles from './Videogames.module.css'
import { getGames } from '../../controllers/games.js';

export default function Videogames(){
    const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
      } catch (error) {
        console.log('Error fetching games:', error);
      }
    }
    fetchGames();
  }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header} style={{marginTop:'500px'}}>
                <h1 style={{marginRight:'30px'}}>Busca tus Videojuegos Favoritos</h1>
                <Input placeholder='Busca aquí!' type='string'></Input>
            </div>
            <div className={styles.games}>
            {games.map((game) => (
          <Game
            key={game.ID}
            nombre={game.titulo}
            descripcion={game.descripcion}
            genero={game.genero}
            fave={true}
          />
        ))}                
               

                </div>
        </div>



    )


}