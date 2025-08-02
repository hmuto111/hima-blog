import { Link } from "react-router-dom";
import { Menu } from "../menu/menu";
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
      <Menu role={role} />
    </div>
  );
};
