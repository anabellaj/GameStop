import React from "react";
import styles from "./Button.module.css";

export default function Button({ display, action }) {

  
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={action}>
        {display}
      </button>
    </div>
  );
}