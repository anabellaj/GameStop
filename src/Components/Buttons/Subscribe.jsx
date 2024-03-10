import styles from "./Button.module.css";
import { useState } from "react";

export default function SubsButton({ ID, state, onSubscribe }) {

    const [isSubscribed, setIsSubscribed] = useState(state);

    const display = isSubscribed ? "Retirarme" : "Subscribirme";
  
    const handleSubscribe = () => {
      setIsSubscribed(!isSubscribed);
      onSubscribe(ID, !isSubscribed); 
    };


    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={handleSubscribe}>
          {display}
        </button>
      </div>
    );
  }