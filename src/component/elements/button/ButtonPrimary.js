import styles from "./Button.module.css";

const ButtonPrimary = ({ content }) => {
  return <button className={styles.button}>{content}</button>;
};

export default ButtonPrimary;
