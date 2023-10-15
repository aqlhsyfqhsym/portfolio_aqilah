import React from "react";
import styles from "./aboutme.module.scss";
import Card from "./../card";

export default function Aboutme() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Card>
          <h4>About me</h4>
          <h1>Code Design</h1>
          <h2>Design Trailblazer</h2>
          <span>i do really love code when it works</span>
        </Card>
      </div>
    </div>
  );
}
