import React from "react";
import styles from "./Input.module.css";

export default function Input({ type, placeholder, label, value, onChange }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}