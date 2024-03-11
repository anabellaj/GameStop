import { getClubs } from '../../controllers/clubs.js';
import { getGames } from '../../controllers/games.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DetailsPage.module.css'
import Button from '../../Components/Buttons/Button.jsx'
import SubsButton from '../../Components/Buttons/Subscribe.jsx'
import { useUser } from "../../context/user.js";
import { getUserClubs } from "../../controllers/users.js";
import { updateUserClubs } from "../../controllers/users.js";

export default function DetailsPage() {
  const [clubs, setClubs] = useState([]);
  const [games, setGames] = useState([]);
  const { ID } = useParams();
  const user = useUser();
  const [currClub, setCurrClub] = useState(null);
  const [userClubs, setUserClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    async function fetchClubs() {
      try {
        const clubData = await getClubs();
        setClubs(clubData);

        const userClubsData = await getUserClubs(user?.uid);
        setUserClubs(userClubsData);

        console.log(clubData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (user){
    fetchClubs();
    }
  }, [user?.uid, user, setUserClubs]);

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

  const handleSubscribe = async (ID, isSubscribed) => {
    try {
      let updatedUserClubs = userClubs;
      if (isSubscribed) {
        updatedUserClubs = [...userClubs, ID];
        setUserClubs(updatedUserClubs);
      } else {
        updatedUserClubs = userClubs.filter((club) => club !== ID);
        setUserClubs(updatedUserClubs);
      }
      await updateUserClubs(user?.uid, updatedUserClubs);
    } catch (error) {
      console.log("Error updating user clubs:", error);
    }
  };

  if (localStorage.getItem('1') === null){
    return(
      <button className='btn btn-secondary btn-lg' display='Probar'><a href='/' style={{color: 'white'}}>Por favor inicie sesión</a></button>
    )
}

  if (isLoading) {
    return <div>Loading...</div>;
  }


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
              <p className='card-text text-muted'>{game.descripcion} </p>
              
                 </div>

              </div>
            
          ))}

        </div>
        <SubsButton ID={ID} state={userClubs.includes(ID)} onSubscribe={handleSubscribe} ></SubsButton>


        
        </div>}</div>;
}