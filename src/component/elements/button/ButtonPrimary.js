import styles from "./Button.module.css";

const ButtonPrimary = ({ content, className, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {content}
    </button>
  );
};

export default ButtonPrimary;
