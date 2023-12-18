"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import OnboardingLayout from "@/layouts/onboarding";
import { signupFields } from "@/utils/data";
import Input from "@/component/input";
import Button from "@/component/button";
import AccountPending from "@/component/alert-popups/account-pending";

const Signup = () => {
  const [overlay, setOverlay] = useState(false);
  return (
    <OnboardingLayout text="Already have an account?" span="Log In" title="Sign Up" subTitle="Create your account here">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOverlay(true);
        }}>
        <div className={styles.signupContainer}>
          <div className={styles.signupBody}>
            {signupFields?.map((items, index) => {
              return <Input key={index} label={items?.label} type={items?.type} placeholder={items?.placeholder} icon={items?.icon} hasIcon={items?.hasIcon} />;
            })}
          </div>
          <Button text="Next" type="submit" />
        </div>
      </form>
      {overlay ? (
        <AccountPending
          overlay={overlay}
          closeAction={() => {
            setOverlay(false);
          }}
        />
      ) : null}
    </OnboardingLayout>
  );
};

export default Signup;
