import { Link } from "react-router";
import { paths } from "@/config/paths";
import logoSrc from "@/assets/himajin-logo.png";
import styles from "./header.module.css";

export const Header = ({ role }: { role?: string }) => {
  return (
    <div className={styles.header}>
      <div className={styles.app_title}>
        <Link to={paths.app.home.path} className={styles.app_logo}>
          <img src={logoSrc} alt="system logo" />
        </Link>
        <div className={styles.app_name}>Hima Blog</div>
      </div>
      <div className={styles.menu}>
        {role === "admin" && (
          <Link to={paths.admin.home.path} style={{ textDecoration: "none" }}>
            <p>adminhome</p>
          </Link>
        )}
        <Link to={paths.app.home.path} style={{ textDecoration: "none" }}>
          <p>home</p>
        </Link>
        <p>portfolio</p>
      </div>
    </div>
  );
};
