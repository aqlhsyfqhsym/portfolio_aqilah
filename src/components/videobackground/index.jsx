import React from "react";
import IconList from "@/components/contactList";
import ContactInfo from "@/data/contact";

import styles from "./video.module.scss";

import BackgroundVideo from "./../../../public/video/video.mp4";

export default function VideoSection() {
  return (
    <div className="hero-container">
      <video src={BackgroundVideo} autoPlay loop muted />
      <div className={styles.headerDesc}>
        <p> AQILAH SYAFIQAH </p>
        <span>Shah Alam City, MY</span>
        <div className={styles.contactIcon}>
          {ContactInfo.map(({ info }, index) => (
            <IconList key={index} icon={info.icon} link={info.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
