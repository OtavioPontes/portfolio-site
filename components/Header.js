import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";
import image from "../assets/avatar.png";

function Header() {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        width={180}
        height={180}
        priority
        alt="Pixel art of the author"
      />
      <div className={styles.spacer}></div>
      <h4 className={styles.name}>Otávio Pontes</h4>
      <div className={styles.spacer}></div>
      <h3 className={styles.title}>&lt;Frontend Developer/&gt;</h3>
      <div className={styles.space}></div>
      <div>
        <h6 className={styles.textSection}>
          <span className={styles.text}>
            Software Engineer focused on crafting Frontend solutions, such as
          </span>{" "}
          <span className={styles.textHighlighted}>Mobile Apps</span>
          <span className={styles.text}>,</span>{" "}
          <span className={styles.textHighlighted}>Websites</span>{" "}
          <span className={styles.text}>and</span>{" "}
          <span className={styles.textHighlighted}>Web Systems</span>
          <span className={styles.text}>
            . Also a Design Enthusiast. Currently, building apps at
          </span>{" "}
          <span className={styles.textHighlightedBlue}>Arbit & Lello</span>
          {"."}
        </h6>
      </div>
      <div className={styles.divEmail}>
        <p className={styles.email}>otavio.pontes1103@gmail.com</p>
      </div>
    </div>
  );
}

export default Header;
