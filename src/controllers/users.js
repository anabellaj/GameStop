import { db } from "../firebase/config";
import { collection, getDocs, getDoc, deleteDoc, setDoc, doc, query, where } from "firebase/firestore";

// Función para crear un usuario
export async function createUser({ uid, firstname, lastname, username, email, favoritegame, memberships }) {
    const usersCollection = collection(db, "users");
    const userDoc = doc(usersCollection, uid);
    const data = { firstname, lastname, username, email, favoritegame, memberships };
    await setDoc(userDoc, data);

}


// Función para actualizar un usuario
export async function updateUser(uid, { firstname, lastname, username, email, favoritegame, memberships }) {
    const usersCollection = collection(db, "users");
    const userRef = doc(usersCollection, uid); 
    const data = { firstname, lastname, username, email, favoritegame, memberships };
    await setDoc(userRef, data);
}

// Función para obtener todos los usuarios
export async function getUsers() {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    console.log(usersList);
    return usersList;
}

// Función para obtener un usuario por su UID
export async function getUser(uid) {
    const userRef = doc(db, "users", uid);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
        return userSnapshot.data();
    } else {
        console.log("No se encontró ningún usuario con el UID proporcionado.");
        return null;
    }
}

export async function getUserInfo(uid) {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDocSnapshot = await getDoc(userDocRef);
      
      if (userDocSnapshot.exists()) {
        return userDocSnapshot.data();
      } else {
        console.log("User document does not exist");
        return null;
      }
    } catch (error) {
      console.error("Error getting user info:", error);
      throw error;
    }
  }

// Función para eliminar un usuario por su UID
export async function deleteUser(uid) {
    const usersCollection = collection(db, "users");

    const userQuery = query(usersCollection, where("uid", "==", uid));
    const userSnapshot = await getDocs(userQuery);
    
    await deleteDoc(userSnapshot.docs[0].ref);
}

export async function isNewUser(uid) {
    const user = await getUser(uid);
    if (user) {
        return false;
    } else {
        return true;
    }
}
