import { useState } from "react";
import useWindowSize from "@/features/blog/hooks/useWindowSize";
import { Link } from "react-router-dom";
import { paths } from "@/config/paths";
import { IoSearch } from "react-icons/io5";
import { SearchBlog } from "../search-blog/search-blog";
import styles from "./menu.module.css";

export const Menu = ({ role }: { role?: string }) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return isMobile ? (
    <>
      <div className={styles.search_wrapper}>
        <input
          type="checkbox"
          id={styles.search_toggle}
          onChange={toggleSearch}
          hidden
          checked={isSearchOpen}
        />
        <label className={styles.search_icon} htmlFor={styles.search_toggle}>
          <IoSearch size={35} color="#333333" />
        </label>

        <div className={styles.overlay} onClick={closeSearch}></div>
        <div className={styles.search_container}>
          <SearchBlog role={role} onSearch={closeSearch} />
        </div>
      </div>

      <div className={styles.humburger_menu_wrapper}>
        <input
          type="checkbox"
          id={styles.humburger_menu_toggle}
          hidden
          checked={isMenuOpen}
          onChange={toggleMenu}
        />

        <label
          className={styles.humburger_menu_icon}
          htmlFor={styles.humburger_menu_toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className={styles.overlay} onClick={closeMenu}></div>

        <nav className={styles.humburger_menu_container}>
          <div className={styles.humburger_menu}>
            {role === "admin" && (
              <Link
                to={paths.admin.home.path}
                style={{ textDecoration: "none" }}
                onClick={closeMenu}
              >
                adminhome
              </Link>
            )}
            <Link
              to={paths.app.home.path}
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              home
            </Link>
            <Link
              to={paths.portfolio.path}
              style={{ textDecoration: "none" }}
              onClick={closeMenu}
            >
              portfolio
            </Link>
          </div>
        </nav>
      </div>
    </>
  ) : (
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
  );
};
