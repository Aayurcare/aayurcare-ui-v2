import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({ content }) => {
  return <button className={styles.button}>{content}</button>;
};

export default ButtonPrimary;
