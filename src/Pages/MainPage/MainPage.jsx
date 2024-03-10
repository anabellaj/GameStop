import { useEffect, useState } from 'react';
import Club from '../../Components/Clubes/Club.jsx';
import styles from './MainPage.module.css';
import { getClubs } from '../../controllers/clubs.js';

export default function MainPage() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    async function fetchClubs() {
      try {
        const clubsData = await getClubs();
        setClubs(clubsData);
      } catch (error) {
        console.log('Error fetching clubs:', error);
      }
    }

    fetchClubs();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.available}>Clubes Disponibles</h1>
      <div className={styles.page}>
        {clubs.map((club) => (
          <Club
            key={club.ID}
            name={club.nombre}
            description={club.descripcion}
            state={true}
            link={`/clubs/${club.ID}`}
          />
        ))}
      </div>
    </div>
  );
}