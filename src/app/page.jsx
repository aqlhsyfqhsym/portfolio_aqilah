"use client";
import Image from "next/image";
import VideoBg from "../components/videobackground";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <VideoBg />
      <div className={styles.description}></div>
    </main>
  );
}
