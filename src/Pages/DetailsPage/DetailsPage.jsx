import { getClubs } from '../../controllers/clubs.js';
import { getGames } from '../../controllers/games.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DetailsPage.module.css'
import Button from '../../Components/Buttons/Button.jsx'

export default function DetailsPage() {
  const [clubs, setClubs] = useState([]);
  const [games, setGames] = useState([]);
  const { ID } = useParams();
  const [currClub, setCurrClub] = useState(null);

  useEffect(() => {
    async function fetchClubs() {
      try {
        const clubData = await getClubs();
        setClubs(clubData);
        console.log(clubData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchClubs();
  }, []);

  useEffect(() => {
    if (clubs.length > 0) {
      const foundClub = clubs.find((club) => club.ID === ID);
      setCurrClub(foundClub);
    }
  }, [clubs, ID]);

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

  const getClubGames = () => {
    if (currClub && games.length > 0) {
      const clubGames = games.filter((game) => currClub.videojuegos.includes(game.ID));
      console.log(clubGames)
      return clubGames;
    }
    return [];
  };

  const clubGames = getClubGames();


  return <div>{currClub && 
        <div className='container-fluid'><h1>{currClub.nombre}</h1>
        <h4>{currClub.descripcion}</h4>
        <p></p>
        <div className='card'>
        <h2>Juegos Incluidos:</h2>
        {clubGames.map((game) => (
            <div className='card-body' key={game.ID}>
            <div className=''>
              <h4 className='card-title'>{game.titulo} - {game.genero}</h4>
              <p className='card-text text-muted'>{game.descripcion}</p>
              
                 </div>

              </div>
            
          ))}

        </div>
        <Button display='Subscribirme'></Button>


        
        </div>}</div>;
}