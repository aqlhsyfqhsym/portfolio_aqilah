import React from "react";
import Button from "../button";

import styles from "./intro.module.scss";

export default function VideoSection() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftHeader}>
        <h2>Front-End Developer</h2>
        <h1>Code Design</h1>
        <h2>Design Trailblazer</h2>
        <span>i do really love code when it works</span>
        {/* <span>explore me</span> */}
        <Button label="explore me" onClick={handleClick} />
      </div>
      <div className={styles.rightHeader}></div>
    </div>
  );
}
