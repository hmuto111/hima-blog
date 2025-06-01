import { Link } from "react-router-dom";
import { paths } from "@/config/paths";
import logoSrc from "@/assets/himajin-logo.png";
import styles from "./header.module.css";

export const Header = ({ role }: { role?: string }) => {
  return (
    <div className={styles.header}>
      <Link to={paths.app.home.path} className={styles.app_title}>
        <div className={styles.app_logo}>
          <img src={logoSrc} alt="system logo" />
        </div>
        <div className={styles.app_name}>Hima Blog</div>
      </Link>
      <div className={styles.menu}>
        {role === "admin" && (
          <Link to={paths.admin.home.path} style={{ textDecoration: "none" }}>
            <p>adminhome</p>
          </Link>
        )}
        <Link to={paths.app.home.path} style={{ textDecoration: "none" }}>
          <p>home</p>
        </Link>
        <Link to={paths.portfolio.path} style={{ textDecoration: "none" }}>
          <p>portfolio</p>
        </Link>
      </div>
    </div>
  );
};
