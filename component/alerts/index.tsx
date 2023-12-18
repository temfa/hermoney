import React from "react";
import styles from "./styles.module.css";
import Overlay from "../overlay";
import Close from "@/svgs/close";
import Button from "../button";

const Alerts = ({ overlay, closeAction, children, buttonText, action }: { overlay: boolean; closeAction: any; children: any; buttonText: string; action: any }) => {
  return (
    <Overlay overlay={overlay}>
      <div className={styles.alertsContainer}>
        <div className={styles.alertsWrapper}>
          <div className={styles.alertsClose}>
            <Close action={closeAction} />
          </div>
          {children}
        </div>
        <div className={styles.alertsButton} onClick={action}>
          <Button text={buttonText} type="button" />
        </div>
      </div>
    </Overlay>
  );
};

export default Alerts;
