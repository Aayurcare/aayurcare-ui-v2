import styles from "./Button.module.css";

const ButtonPrimary = ({ content, className }) => {
  return <button className={`${styles.button} ${className}`}>{content}</button>;
};

export default ButtonPrimary;
