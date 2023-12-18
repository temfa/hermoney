import React from "react";
import styles from "./styles.module.css";

const Input = ({ label, type, placeholder, hasIcon, icon }: { label: string; type: string; placeholder: string; hasIcon: boolean; icon?: any }) => {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <div>
        <input type={type} placeholder={placeholder} />
        {hasIcon ? icon : null}
      </div>
    </div>
  );
};

export default Input;
