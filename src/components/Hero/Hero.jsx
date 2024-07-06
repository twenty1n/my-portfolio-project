import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rin</h1>
        <p className={styles.description}>
          I'm a third year student at King Mongkut’s University of Technology
          Thonburi (KMUTT) studying Computer Engineering.
        </p>
        <a href="mailto:rinratirin@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.buttontopBlur} />
    </section>
  );
};
