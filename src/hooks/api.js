import { useState, useEffect } from "react";
import { getGames } from "../controllers/games";

export function useGames() {
    const [games, setGames] = useState(null);

    useEffect(() => {
        async function loadGames() {
            const games = await getGames();
            setGames(games);
        }
        loadGames();
    }, []);
    const isLoading = games === null;
    return { games, isLoading };
}