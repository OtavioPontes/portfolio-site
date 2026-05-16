import Image from "next/image";
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

const apps = [
  { src: melivra, label: "App Me Livra" },
  { src: pethero, label: "App Pet Hero" },
  { src: ctservice, label: "App CT Service" },
  { src: marvel, label: "App Marvel" },
  { src: maid, label: "App Maid Café" },
  { src: coffee, label: "App Café" },
];

function Body() {
  return (
    <section className={styles.container}>
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
          <span className={styles.text}>with Flutter, Dart, Firebase &amp; 💙</span>
        </p>

        <div className={styles.apps}>
          {apps.map((app) => (
            <div key={app.label} className={styles.app}>
              <div className={styles.imageWrapper}>
                <Image
                  src={app.src}
                  alt={app.label}
                  sizes="(max-width: 480px) 45vw, (max-width: 768px) 30vw, 220px"
                  placeholder="blur"
                  className={styles.image}
                />
              </div>
              <p className={styles.appSubtitle}>{app.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.titleWeb}>
          <p>
            <span className={styles.textTitle}>Stack</span>{" "}
            <span className={styles.textTitleHighlightedBlue}>Web</span>
          </p>
          <div className={styles.laptop}>
            <Image src={laptop} width={100} height={62} alt="Laptop" />
          </div>
        </div>
        <p className={styles.webText}>
          <span className={styles.text}>I build</span>{" "}
          <span className={styles.textHighlightedBlue}>Web Systems</span>{" "}
          <span className={styles.text}>and</span>{" "}
          <span className={styles.textHighlightedBlue}>Sites</span>{" "}
          <span className={styles.text}>
            with React, JavaScript, Firebase &amp; 💜
          </span>
        </p>

        <p className={styles.nihongo} aria-hidden="true">
          ソフトウェア　エンジニア
        </p>

        <div className={styles.socialButtons}>
          <a
            href="https://www.linkedin.com/in/otavio-pontes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.floatButtonLinkedin}
          >
            <Image src={linkedin} width={64} height={64} alt="" />
          </a>
          <a
            href="https://github.com/OtavioPontes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.floatButtonGithub}
          >
            <Image src={github} width={64} height={64} alt="" />
          </a>
        </div>

        <footer className={styles.footerText}>
          <p>Designed &amp; Built with ❤ by Otávio Pontes</p>
        </footer>
      </div>
    </section>
  );
}

export default Body;
