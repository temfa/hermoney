import React, { ReactNode } from "react";
import styles from "./styles.module.css";

const Overlay = ({ overlay, children }: { overlay: boolean; children: React.ReactNode }) => {
  return <div className={overlay ? styles.overlay : styles.noShow}>{children}</div>;
};

export default Overlay;
