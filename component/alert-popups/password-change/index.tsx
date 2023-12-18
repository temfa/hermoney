import React from "react";
import styles from "./styles.module.css";
import Alerts from "@/component/alerts";
import SuccessCheck from "@/svgs/successCheck";

const PasswordChange = ({
  overlay,
  closeAction,
  title,
  text,
  buttonText,
  action,
}: {
  overlay: boolean;
  closeAction: any;
  title: string;
  text: string;
  buttonText: string;
  action: any;
}) => {
  return (
    <Alerts overlay={overlay} closeAction={closeAction} buttonText={buttonText} action={action}>
      <div className={styles.changePassword}>
        <SuccessCheck />
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </Alerts>
  );
};

export default PasswordChange;
