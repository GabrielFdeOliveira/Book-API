import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGear, TfiBarChartAlt, AiOutlineHeart } from "react-icons/all";
import styles from "./Navbar.module.css";

type NavbarProps = {
  profileImage: string;
  alt: string;
};

const Navbar: React.FC<NavbarProps> = ({ profileImage, alt }) => {
  //State to track which tab is active and apply the styling accordingly
  const [activeTab, setActiveTab] = useState("Home");

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/favourites") {
      setActiveTab("Favourites");
    } else if (location.pathname === "/edit") {
      setActiveTab("Edit");
    }
  }, [location]);

  return (
    <div className={styles.Navbar}>
      <div className={styles.profileBackground}>
        <img className={styles.profileImage} src={profileImage} alt={alt} />
      </div>
      <nav className={styles.nav}>
        <ul>
          {/* Using the Link component from React-Router to navigate through the pages */}
          <Link to="/">
            <li className={activeTab === "Home" ? styles.active : ""}>
              <button onClick={() => setActiveTab("Home")}>
                <TfiBarChartAlt className={styles.icon} />
                <hr className={styles.invisible}></hr>
              </button>
            </li>
          </Link>
          <Link to="/favourites">
            <li className={activeTab === "Favourites" ? styles.active : ""}>
              <button onClick={() => setActiveTab("Favourites")}>
                <AiOutlineHeart className={styles.icon} />
                <hr></hr>
              </button>
            </li>
          </Link>
          <Link to="/edit">
            <li className={activeTab === "Edit" ? styles.active : ""}>
              <button onClick={() => setActiveTab("Edit")}>
                <BsGear className={styles.icon} />
                <hr></hr>
              </button>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
