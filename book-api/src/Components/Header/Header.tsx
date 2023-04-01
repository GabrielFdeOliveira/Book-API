import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h2>
        RAD<span className={styles.letters}>ICAL</span>
      </h2>
    </div>
  );
}

export default Header;
