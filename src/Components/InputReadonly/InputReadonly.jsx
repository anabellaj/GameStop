import React from "react";
import styles from "./InputReadonly.module.css";

export default function InputReadonly({ type, placeholder, label }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        readOnly
      ></input>
    </div>
  );
}