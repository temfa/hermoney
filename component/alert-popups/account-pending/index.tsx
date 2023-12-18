import React from "react";
import styles from "./styles.module.css";
import Alerts from "../../alerts";
import Clock from "@/svgs/clock";

const AccountPending = ({ overlay, closeAction }: { overlay: boolean; closeAction: any }) => {
  return (
    <Alerts overlay={overlay} closeAction={closeAction} buttonText="Proceed" action={closeAction}>
      <div className={styles.signupAlert}>
        <Clock />
        <div>
          <h2>Account creation pending</h2>
          <p>Approval email has been set to your email address, click on the link to log in to your account</p>
        </div>
      </div>
    </Alerts>
  );
};

export default AccountPending;
