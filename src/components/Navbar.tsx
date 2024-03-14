import React from "react";
import styles from "./Navbar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <img src="https://porosfilkom.ub.ac.id/logo-poros.svg" alt="poros_logo" />
      <p>
        Incubation <br />
        Week 2
      </p>
    </nav>
  );
};

export default NavBar;
