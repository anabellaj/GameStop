import { useEffect, useState } from "react";
import Input from "../../Components/Inputs/Input";
import Game from "../../Components/Games/Game";
import { useUser } from "../../context/user.js";
import styles from "./Videogames.module.css";
import { getGames } from "../../controllers/games.js";
import { getUserGame, updateUserGame } from "../../controllers/users.js";

export default function Videogames(){
    const { user, isLoading } = useUser();
    const [games, setGames] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [userGame, setUserGame] = useState('');

    useEffect(() => {
        async function fetchGames() {
            try {
                const gamesData = await getGames();
                setGames(gamesData);

                const favGame = await getUserGame(user?.uid);
                setUserGame(favGame || '');
            } catch (error) {
                console.log("Error fetching games:", error);
            }
        }

        if (user) {
            fetchGames();
        }
    }, [user?.uid, user]);

    const filteredGames = games.filter((game) =>
        game.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleLike = async (gameName, isLiked) => {
        try {
            if (isLiked) {
                setUserGame(gameName);
            } else {
                setUserGame('');
            }
            await updateUserGame(user?.uid, gameName);
        } catch (error) {
            console.log("Error updating user clubs:", error);
        }
    };

    if (isLoading){
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header} style={{marginTop:'100px'}}>
                <h1 style={{marginRight:'30px'}}>Busca tus Videojuegos Favoritos</h1>
                <Input 
                    placeholder='Busca aquí!' 
                    type='string' 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className={styles.games}>
                {filteredGames.map((game) => (
                    <Game
                        key={game.ID}
                        nombre={game.titulo}
                        descripcion={game.descripcion}
                        genero={game.genero}
                        fave={userGame.includes(game.titulo)}
                        onLike ={handleLike}
                    />
                ))}
            </div>
        </div>
    );
}
