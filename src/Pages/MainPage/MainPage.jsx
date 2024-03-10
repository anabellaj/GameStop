import { useEffect, useState } from "react";
import Club from "../../Components/Clubes/Club.jsx";
import styles from "./MainPage.module.css";
import { getClubs } from "../../controllers/clubs.js";
import { getUserClubs } from "../../controllers/users.js";
import { updateUserClubs } from "../../controllers/users.js";
import { useUser } from "../../context/user.js"; // Importar useUser

export default function MainPage() {
  const { user, isLoading } = useUser(); // Obtener user y isLoading desde useUser
  const [clubs, setClubs] = useState([]);
  const [userClubs, setUserClubs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchClubs() {
      try {
        const clubsData = await getClubs();
        setClubs(clubsData);

        const userClubsData = await getUserClubs(user?.uid);
        setUserClubs(userClubsData);
      } catch (error) {
        setError(error);
      }
    }

    if (user) {
      fetchClubs();
    }
  }, [user?.uid, user, setUserClubs]);

  const handleSubscribe = async (clubID, isSubscribed) => {
    try {
      let updatedUserClubs = userClubs;
      if (isSubscribed) {
        updatedUserClubs = [...userClubs, clubID];
        setUserClubs(updatedUserClubs);
      } else {
        updatedUserClubs = userClubs.filter((club) => club !== clubID);
        setUserClubs(updatedUserClubs);
      }
      await updateUserClubs(user?.uid, updatedUserClubs);
    } catch (error) {
      setError(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.available}>Clubes Disponibles</h1>
      <div className={styles.page}>
        {clubs.map((club) => (
          <Club
            key={club.ID}
            ID={club.ID}
            name={club.nombre}
            description={club.descripcion}
            state={userClubs.includes(club.ID)}
            link={`/clubs/${club.ID}`}
            onSubscribe={handleSubscribe}
          />
        ))}
      </div>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
