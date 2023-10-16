import React from "react";

import styles from "./video.module.scss";

import BackgroundVideo from "./../../../public/video/video.mp4";

export default function VideoSection() {
  return (
    <div className="hero-container">
      <video src={BackgroundVideo} autoPlay loop muted />
      <div className={styles.headerDesc}>
        <p> AQILAH SYAFIQAH </p>
        <span>Shah Alam City, MY</span>
      </div>
    </div>
  );
}
