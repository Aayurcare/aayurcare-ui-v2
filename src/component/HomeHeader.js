import styles from "./HomeHeader.module.css";
import UserIcon from "../assets/icons/svgjs/UserIcon";
import Logo from "../assets/icons/logo_light_bg.svg";
const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} />
      <section className={styles.middleSection}>
        <p className={styles.menuItem}>Home</p>
        <p className={styles.menuItem}>About Us</p>
        <p className={styles.menuItem}>Services</p>
        <p className={styles.menuItem}>Career</p>
        <p className={styles.menuItem}>Blog</p>
        <p className={styles.menuItem}>Help</p>
      </section>
      <UserIcon />
    </header>
  );
};

export default HomeHeader;
