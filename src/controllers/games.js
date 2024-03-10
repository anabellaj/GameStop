import { db } from "../firebase/config";
import { collection, addDoc, getDocs, getDoc, deleteDoc, setDoc, doc, query, where} from "firebase/firestore";

export async function createGame({title, gender, description}) {
    const gamesCollection = collection(db, "games");
    const data = {title, gender, description};
    await addDoc(gamesCollection, data);
}

export async function updateGame(id, {title, gender, description}) {
    const gamesCollection = collection(db, "games");
    const ref = doc(gamesCollection, id); 
    const data = {title, gender, description};
    await setDoc(ref, data);
}

export async function getGames() {
    const gamesCollection = collection(db, "games");
    const gamesSnapshot = await getDocs(gamesCollection);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data());
    console.log(gamesList);
    return gamesList;
}

export async function getGame(id) {
    const gameRef = doc(db, "games", id);
    const gameSnapshot = await getDoc(gameRef);
    const game = gameSnapshot.data();
    return game;
}

export async function deleteGame(id) {
    const gamesCollection = collection(db, "games");

    const gameQuery = query(gamesCollection, where("id", "==", id));
    const gamesSnapshot = await getDocs(gameQuery);
    
    await deleteDoc(gamesSnapshot.docs[0].ref);
}
