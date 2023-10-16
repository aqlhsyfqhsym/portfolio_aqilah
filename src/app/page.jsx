"use client";
import Image from "next/image";
import VideoBg from "../components/videobackground";
import Intro from "../components/intro";
import AboutMe from "../components/aboutme";
import Button from "../components/button";

import styles from "./page.module.scss";

export default function Home() {
  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    targetSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className={styles.main}>
      <div className={styles.stickyText}> aqilah syafiqah</div>
      <VideoBg />
      <Intro>
        <Button label="explore me" onClick={handleScroll} />
      </Intro>

      <div id="target-section"></div>
      <AboutMe />
    </main>
  );
}
