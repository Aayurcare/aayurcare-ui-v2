import styles from "./HomeHeader.module.css";
import UserIcon from "../assets/icons/svgjs/UserIcon";
const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <h4>LOGO</h4>
      <section className={styles.middleSection}>
        <p>Home</p>
        <p>About Us</p>
        <p>Services</p>
        <p>Career</p>
        <p>Blog</p>
        <p>Help</p>
      </section>
      <UserIcon />
    </header>
  );
};

export default HomeHeader;
