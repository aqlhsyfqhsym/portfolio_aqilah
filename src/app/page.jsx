"use client";
import Image from "next/image";
import VideoBg from "../components/videobackground";
import Intro from "../components/intro";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <VideoBg />
      <Intro />
      <div className={styles.description}></div>
    </main>
  );
}
