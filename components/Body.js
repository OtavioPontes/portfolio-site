import Image from "next/image";
import React from "react";
import styles from "./Body.module.css";
import phone from "../assets/phone.png";
import laptop from "../assets/laptop.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import coffee from "../assets/CoffeeApp.jpg";
import maid from "../assets/MaidApp.jpg";
import marvel from "../assets/MarvelApp.jpg";
import melivra from "../assets/MelivraApp.png";
import ctservice from "../assets/CT Service.jpg";
import pethero from "../assets/PetheroApp.jpg";

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
        <div className={styles.spacer}></div>
        <div className={styles.apps}>
          <div className={styles.app}>
            <Image
              src={melivra}
              priority
              className={styles.image}
              unoptimized={true}
              alt="App MeLivra"
            />
            <p className={styles.appSubtitle}>App Me Livra</p>
          </div>
          <div className={styles.app}>
            <Image
              src={pethero}
              priority
              className={styles.image}
              unoptimized={true}
              alt="App Pet Hero"
            />
            <p className={styles.appSubtitle}>App Pet Hero</p>
          </div>
          <div className={styles.app}>
            <Image
              src={ctservice}
              priority
              className={styles.image}
              unoptimized={true}
              alt="App CT Service"
            />
            <p className={styles.appSubtitle}>App CT Service</p>
          </div>
          <div className={styles.app}>
            <Image
              src={marvel}
              priority
              className={styles.image}
              unoptimized={true}
              alt="App Marvel"
            />
            <p className={styles.appSubtitle}>App Marvel</p>
          </div>
          <div className={styles.app}>
            <Image
              src={maid}
              priority
              className={styles.image}
              unoptimized={true}
              alt="App Maid Café"
            />
            <p className={styles.appSubtitle}>App Maid Café</p>
          </div>
          <div className={styles.app}>
            <Image
              src={coffee}
              priority
              className={styles.image}
              unoptimized={true}
              alt="App Café"
            />
            <p className={styles.appSubtitle}>App Café</p>
          </div>
        </div>
        <div className={styles.spacer}></div>
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
          <Image src={linkedin} width={80} height={80} alt="Link p/ Linkedin" />
        </a>
        <a
          href="https://github.com/OtavioPontes"
          target="_"
          className={styles.floatButtonGithub}
        >
          <Image src={github} width={80} height={80} alt="Link p/ Github" />
        </a>
        <div className={styles.space}></div>
        <footer className={styles.footerText}>
          <p>Designed & Built with ❤ by Otávio Pontes</p>
        </footer>
      </div>
    </div>
  );
}

export default Body;
