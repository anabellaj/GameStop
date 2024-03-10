import React, {useState} from "react";
import styles from "./Club.module.css";

export default function Club({ ID, name, description, state, link, onSubscribe }) {
  const [isSubscribed, setIsSubscribed] = useState(state);

  const buttonText = isSubscribed ? "Retirarme" : "Subscribirme";

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    onSubscribe(ID, !isSubscribed); 
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{name}</h1>
      <h3 className={styles.desc}>{description}</h3>
      <div className={styles.more}>
        <button className="btn btn-outline-light" onClick={handleSubscribe}>
            {buttonText}</button>

        <a className={styles.link} href={link}>
          Más info
        </a>
      </div>
    </div>
  );
}
