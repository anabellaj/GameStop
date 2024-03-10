import { db } from "../firebase/config";
import { collection, addDoc, getDocs, getDoc, deleteDoc, setDoc, doc, query, where} from "firebase/firestore";

export async function createClub({name, description, games}) {
    const gamesCollection = collection(db, "clubes");
    const data = {name, description, games};
    await addDoc(gamesCollection, data);
}

export async function updateClub(id, {name, description, games}) {
    const clubsCollection = collection(db, "clubes");
    const ref = doc(clubsCollection, id); 
    const data = {name, description, games};
    await setDoc(ref, data);
}

export async function getClubs() {
    const clubsCollection = collection(db, "clubes");
    const clubsSnapshot = await getDocs(clubsCollection);
    const clubsList = clubsSnapshot.docs.map(doc => doc.data());
    console.log(clubsList);
    return clubsList;
}

export async function getClub(id) {
    const clubRef = doc(db, "clubes", id);
    const clubSnapshot = await getDoc(clubRef);
    const club = clubSnapshot.data();
    return club;
}

export async function deleteClub(id) {
    const clubsCollection = collection(db, "clubes");

    const clubQuery = query(clubsCollection, where("id", "==", id));
    const clubsSnapshot = await getDocs(clubQuery);
    
    await deleteDoc(clubsSnapshot.docs[0].ref);
}

export const clubs = getClubs();