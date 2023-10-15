import React from "react";
import styles from "./card.module.scss";

export default function card({ children }) {
  return <div className={styles.cardContainer}>{children}</div>;
}
