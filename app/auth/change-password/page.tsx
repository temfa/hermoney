"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import OnboardingLayout from "@/layouts/onboarding";
import Input from "@/component/input";
import EyeClose from "@/svgs/eyeClose";
import Button from "@/component/button";
import PasswordChange from "@/component/alert-popups/password-change";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const router = useRouter();
  const [overlay, setOverlay] = useState(false);
  return (
    <OnboardingLayout title="Reset Password" subTitle="Enter your credentials to access your account">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOverlay(true);
        }}>
        <div className={styles.resetPassword}>
          <div>
            <Input label="Previous Password" type="password" placeholder="Placeholder" hasIcon={true} icon={<EyeClose />} />
            <Input label="New Password" type="password" placeholder="Placeholder" hasIcon={true} icon={<EyeClose />} />
            <Input label="Confirm Password" type="password" placeholder="Placeholder" hasIcon={true} icon={<EyeClose />} />
          </div>
          <Button text="Confirm" type="submit" />
        </div>
      </form>
      {overlay ? (
        <PasswordChange
          overlay={overlay}
          closeAction={() => {
            setOverlay(false);
          }}
          title="Password changed successfully"
          text="User password has been updated, click on the proceed to login button to access your account"
          buttonText="Proceed to login"
          action={() => {
            router.push("/auth/login");
          }}
        />
      ) : null}
    </OnboardingLayout>
  );
};

export default ChangePassword;
