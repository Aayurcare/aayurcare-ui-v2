import backgroundStyles from "./BackgroundStyles.module.css";
import BackgroundVectorRight from "../../../assets/images/home/vector1.png";
import BackgroundVectorLeft from "../../../assets/images/home/vector2.png";

const SectionContainerLeft = ({ children, styles }) => {
  return (
    <div className={backgroundStyles.section1Container} style={styles}>
      <div>
        <img
          className={backgroundStyles.backgroundImage}
          src={BackgroundVectorLeft}
        />
      </div>
      <div className={backgroundStyles.contentContainer}>{children}</div>
    </div>
  );
};

const SectionContainerRight = ({ children, styles }) => {
  return (
    <div className={backgroundStyles.section1Container}>
      <div>
        <img
          className={backgroundStyles.backgroundImage}
          src={BackgroundVectorRight}
        />
      </div>
      <div className={backgroundStyles.contentContainer}>{children}</div>
    </div>
  );
};

export { SectionContainerLeft, SectionContainerRight };
