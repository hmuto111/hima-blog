import logoSrc from "@/assets/himajin-logo.png";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.app_title}>
        <div className={styles.app_logo}>
          <img src={logoSrc} alt="system logo" />
        </div>
        <div className={styles.app_name}>Hima Blog</div>
      </div>
      <div className={styles.menu}>
        <p>home</p>
        <p>portfolio</p>
      </div>
    </div>
  );
};
