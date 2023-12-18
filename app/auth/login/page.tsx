"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import OnboardingLayout from "@/layouts/onboarding";
import Button from "@/component/button";
import Input from "@/component/input";
import EyeClose from "@/svgs/eyeClose";
import PasswordChange from "@/component/alert-popups/password-change";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [overlay, setOverlay] = useState(false);
  return (
    <OnboardingLayout text="Are you new here?" title="Log In" subTitle="Enter your credentials to access your account" span="Create Account">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOverlay(true);
        }}>
        <div className={styles.loginContainer}>
          <div className={styles.loginBody}>
            <Input label="Organization Name" placeholder="Placeholder" type="text" hasIcon={false} />
            <Input label="Password " placeholder="Placeholder" type="password" hasIcon={true} icon={<EyeClose />} />
            <div>
              <p
                onClick={() => {
                  router.push("/auth/forgot-password");
                }}>
                Forgot Password?
              </p>
            </div>
          </div>
          <Button text="Log in" type="submit" />
        </div>
      </form>
      {overlay ? (
        <PasswordChange
          overlay={overlay}
          closeAction={() => {
            setOverlay(false);
          }}
          title="Kindly change your password"
          text="Due to security reasons kindly change your password, this activity occurs every 30 days"
          buttonText="Change password"
          action={() => {
            router.push("/auth/change-password");
          }}
        />
      ) : null}
    </OnboardingLayout>
  );
};

export default Login;
