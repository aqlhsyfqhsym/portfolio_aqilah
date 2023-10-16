import React from "react";

import IconList from "@/components/contactList";
import ContactInfo from "@/data/contact";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <a href="/">
        <img
          src="https://see.fontimg.com/api/renderfont4/ywGad/eyJyIjoiZnMiLCJoIjo3OCwidyI6MjAwMCwiZnMiOjM5LCJmZ2MiOiIjRUNFQ0VDIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/YXFsaHN5ZnFoc3lt/wednesday-script.png"
          alt="SVG fonts"
          width="130" // Specify the width here
          height="24" // Specify the height here
        />
      </a>
      <div className={styles.contactIcon}>
        {ContactInfo.map(({ info }, index) => (
          <IconList key={index} icon={info.icon} link={info.link} />
        ))}
      </div>
    </div>
  );
}
