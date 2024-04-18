import _styles from "./Button.module.css";

const ButtonSecondary = ({ content, styles,onClick }) => {
  return (
    <button onClick={onClick} style={styles} className={_styles.buttonSecondary}>
      {content}
    </button>
  );
};

export default ButtonSecondary;
