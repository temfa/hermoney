import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import Logo from "@/svgs/logo";
import Onboarding from "../../component/assets/onboarding-img.png";
import Image from "next/image";

const OnboardingLayout = ({ children, text, span, title, subTitle }: { children: ReactNode; text?: string; span?: string; title: string; subTitle: string }) => {
  return (
    <div className={styles.onboardingBody}>
      <div className={styles.onboardingWrapper}>
        <div className={styles.onboardingFirst}>
          <div className={styles.onboardingCont}>
            <Logo />
            <div className={styles.onboardingFirstBody}>
              <div className={styles.onboardingText}>
                <h2>{title}</h2>
                <p>{subTitle}</p>
              </div>
              {children}
              {title === "Forgot Password" ? null : title === "Reset Password" ? null : (
                <p>
                  {text} <span>{span}</span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.onboardingSecond}>
          <Image src={Onboarding} width={582} height={327} alt="Onboarding" />
          <div>
            <h2>
              Master your finances with <span>CONFIDENCE </span>
            </h2>
            <p>We empower you to gain confidence, knowledge and control over your finances, achieving lifelong financial security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
