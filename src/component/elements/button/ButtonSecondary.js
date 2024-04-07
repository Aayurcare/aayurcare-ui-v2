import _styles from "./Button.module.css";

const ButtonSecondary = ({ content, styles }) => {
  return (
    <button style={styles} className={_styles.buttonSecondary}>
      {content}
    </button>
  );
};

export default ButtonSecondary;
