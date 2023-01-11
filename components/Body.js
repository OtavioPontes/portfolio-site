import Image from "next/image";
import React from "react";
import styles from "./Body.module.css";
import phone from "../assets/phone.png";
import laptop from "../assets/laptop.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

function Body() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleMobile}>
          <p>
            <span className={styles.textTitle}>Stack</span>{" "}
            <span className={styles.textTitleHighlighted}>Mobile</span>
          </p>
          <div className={styles.phone}>
            <Image src={phone} width={50} height={100} alt="Smartphone" />
          </div>
        </div>
        <p className={styles.mobileText}>
          <span className={styles.text}>I build multiplatform</span>{" "}
          <span className={styles.textHighlighted}>Apps</span>{" "}
          <span className={styles.text}>with Flutter, Dart, Firebase & 💙</span>
        </p>
        <div className={styles.titleWeb}>
          <p>
            <span className={styles.textTitle}>Stack</span>{" "}
            <span className={styles.textTitleHighlightedBlue}>Web</span>
          </p>
          <div className={styles.phone}>
            <Image src={laptop} width={100} height={0} alt="Laptop" />
          </div>
        </div>
        <p className={styles.webText}>
          <span className={styles.text}>I build</span>{" "}
          <span className={styles.textHighlightedBlue}>Web Systems</span>{" "}
          <span className={styles.text}>and</span>{" "}
          <span className={styles.textHighlightedBlue}>Sites</span>{" "}
          <span className={styles.text}>
            with React, JavaScript, Firebase & 💜
          </span>
        </p>
        <p className={styles.nihongo}>ソフトウェア　エンジニア</p>
        <a
          href="https://www.linkedin.com/in/otavio-pontes/"
          target="_"
          className={styles.floatButtonLinkedin}
        >
          <Image
            src={linkedin}
            width={100}
            height={100}
            alt="Link p/ Linkedin"
          />
        </a>
        <a
          href="https://github.com/OtavioPontes"
          target="_"
          className={styles.floatButtonGithub}
        >
          <Image src={github} width={100} height={100} alt="Link p/ Github" />
        </a>
        <footer className={styles.footerText}>
          <p>Designed & Built with ❤ by Otávio Pontes</p>
        </footer>
      </div>
    </div>
  );
}

export default Body;
