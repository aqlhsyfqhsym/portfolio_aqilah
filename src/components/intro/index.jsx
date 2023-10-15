import React from "react";

import styles from "./intro.module.scss";

export default function Intro({ children }) {
  return (
    <div className="container">
      <div className={styles.leftHeader}>
        <h2>Front-End Developer</h2>
        <h1>Code Design</h1>
        <h2>Design Trailblazer</h2>
        <span>i do really love code when it works</span>
        {/* <span>explore me</span> */}

        {children}
      </div>
    </div>
  );
}
