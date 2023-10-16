import React from "react";
import styles from "./aboutme.module.scss";
import Card from "./../card";

export default function Aboutme() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <a href="https://www.fontspace.com/category/svg">
            <img
              src="https://see.fontimg.com/api/renderfont4/ywGad/eyJyIjoiZnMiLCJoIjo2NiwidyI6MjAwMCwiZnMiOjMzLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SGVsbG8gdGhlcmUh/wednesday-script.png"
              alt="SVG fonts"
              width="119" // Specify the width here
              height="40" // Specify the height here
            />
          </a>
          <p>
            About Me - I`ve been rocking as a Front-end Developer for a year
            now. I blend UI/UX wizardry to make slick interfaces. Obsessed with
            daily Spotify playlists, even if they`re on repeat. Can`t help but
            vibe as the star of every song 🎧
          </p>
        </div>

        <div className={styles.cardRow}>
          <Card>
            <div className={styles.description}>
              <h3>NST Data Cara, Intern</h3>
              <span>8 Months</span>
              <p>
                Assisted in developing a billing system, resolved technical
                issues, collaborated with teams, created prototypes, analyzed
                software, and guided clients through the system.
              </p>
            </div>
          </Card>
          <Card>
            <div className={styles.description}>
              <h3>Cara Com My, Front-end Developer</h3>
              <span>2 Years</span>

              <p>
                Developed various web and mobile applications, designed and
                developed websites, maintained application systems, and worked
                cross-functionally with developers to implement new features
              </p>
            </div>
          </Card>
          <Card>
            <div className={styles.description}>
              <h3>Aleph-Labs</h3>

              <p>
                About Me - I`ve been rocking as a Front-end Developer for a year
                now. I blend UI/UX wizardry to make slick interfaces.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
