/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Kodigo API</div>
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span className={open ? styles.close : styles.hamburger}></span>
      </button>
      <ul className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
        <li>
          <a href="#" className={styles.link}>Registrarte</a>
        </li>
        <li>
          <a href="#" className={styles.link}>Iniciar sesion</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;