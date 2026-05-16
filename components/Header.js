import Image from "next/image";
import styles from "./Header.module.css";
import image from "../assets/avatar.png";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.avatar}>
          <Image
            src={image}
            width={180}
            height={180}
            priority
            sizes="(max-width: 480px) 120px, (max-width: 768px) 150px, 180px"
            alt="Pixel art of the author"
          />
        </div>
        <h1 className={styles.name}>Otávio Pontes</h1>
        <h2 className={styles.title}>&lt;Software Engineer/&gt;</h2>
        <p className={styles.textSection}>
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
          <span className={styles.textHighlightedBlue}>Dialog</span>
          {"."}
        </p>
        <div className={styles.divEmail}>
          <a className={styles.email} href="mailto:otavio.pontes1103@gmail.com">
            otavio.pontes1103@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
