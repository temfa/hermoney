import React from "react";
import styles from "./styles.module.css";

const Button = ({ text, type }: { text: string; type: any }) => {
  return (
    <button type={type} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
