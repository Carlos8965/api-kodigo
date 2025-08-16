import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

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
          <Link to="/register" className={styles.link}>Registrarte</Link>
        </li>
        <li>
          <Link to="/login" className={styles.link}>Iniciar sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;