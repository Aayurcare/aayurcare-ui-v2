import styles from "./HomeHeader.module.css";
import UserIcon from "../assets/icons/svgjs/UserIcon";
import Logo from "../assets/icons/logo_light_bg.svg";
import { Link } from "react-router-dom";
const HomeHeader = ({ highlighted }) => {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} />
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
        <p className={styles.menuItem}>
          <Link
            to={"/career"}
            style={{
              color: highlighted == 3 ? "#114DD2" : "black",
              textDecoration: "none",
            }}
          >
            {" "}
            Career
          </Link>
        </p>
        <p className={styles.menuItem}>
          <Link
            to={"/blog"}
            style={{
              color: highlighted == 4 ? "#114DD2" : "black",
              textDecoration: "none",
            }}
          >
            {" "}
            Blog
          </Link>
        </p>
        <p className={styles.menuItem}>
          <Link
            to={"/help"}
            style={{
              color: highlighted == 5 ? "#114DD2" : "black",
              textDecoration: "none",
            }}
          >
            {" "}
            Help
          </Link>
        </p>
      </section>
      <UserIcon />
    </header>
  );
};

export default HomeHeader;
