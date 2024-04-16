import styles from "./HomeHeader.module.css";
import UserIcon from "../assets/icons/svgjs/UserIcon";
import Logo from "../assets/icons/logo_light_bg.svg";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import LogoSM from "../assets/icons/logo_sm.svg";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import { useEffect, useState } from "react";

const CustomBurgerIcon = () => <img src={HamburgerIcon} />;

const HomeHeader = ({ highlighted }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 550);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 500);
    });
  }, []);

  return (
    <header className={styles.header}>
      <img src={isMobile ? LogoSM : Logo} className={styles.logo} />
      {isMobile && (
        <Menu customBurgerIcon={<CustomBurgerIcon />}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      )}
      {!isMobile && (
        <section className={styles.middleSection}>
          <p className={styles.menuItem}>
            <Link
              to={"/"}
              style={{
                color: highlighted == 0 ? "#114DD2" : "black",
                textDecoration: "none",
              }}
            >
              {" "}
              Home
            </Link>
          </p>
          <p className={styles.menuItem}>
            <Link
              to={"/about-us"}
              style={{
                color: highlighted == 1 ? "#114DD2" : "black",
                textDecoration: "none",
              }}
            >
              {" "}
              About Us
            </Link>
          </p>
          <p className={styles.menuItem}>
            <Link
              to={"/services"}
              style={{
                color: highlighted == 2 ? "#114DD2" : "black",
                textDecoration: "none",
              }}
            >
              {" "}
              Services
            </Link>
          </p>
        </section>
      )}
      {/* <UserIcon /> */}
      {!isMobile && <p></p>}
    </header>
  );
};

export default HomeHeader;
