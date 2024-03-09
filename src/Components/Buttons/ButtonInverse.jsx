import React from "react";
import styles from "./ButtonInverse.module.css";

export default function ButtonInverse({ display, action }) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={action}>
        {display}
      </button>
    </div>
  );
}