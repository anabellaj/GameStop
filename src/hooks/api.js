import { useState, useEffect } from "react";
import { getGames } from "../controllers/games";
import { getClubs } from "../controllers/clubs";

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


export function useClubs() {
    const [clubs, setClubs] = useState(null);

    useEffect(() => {
        async function loadclubs() {
            const clubs = await getClubs();
            setClubs(clubs);
        }
        loadclubs();
    }, []);
    const isLoading = clubs === null;
    return { clubs, isLoading };
}