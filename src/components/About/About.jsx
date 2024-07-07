import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor Icon"
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Server Icon"
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I'm a backend developer.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor Icon"
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have create design
                system as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
