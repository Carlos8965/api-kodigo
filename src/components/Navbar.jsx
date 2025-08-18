import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

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
        {!user ? (
          <>
            <li>
              <Link to="/register" className={styles.link}>Registrarte</Link>
            </li>
            <li>
              <Link to="/login" className={styles.link}>Iniciar sesión</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout} className={styles.link} style={{background: "none", border: "none", cursor: "pointer"}}>Cerrar sesión</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;