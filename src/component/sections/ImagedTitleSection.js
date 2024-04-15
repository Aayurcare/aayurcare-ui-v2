import styles from "./ImagedTitleSection.module.css";

const ImagedTitleSection = ({
  backgroundImage,
  pre_title,
  highlighted,
  post_title,
}) => {
  return (
    <div className={styles.firstContainer}>
      <img
        src={backgroundImage}
        alt="discover-more"
        className={styles.firstContainerBackground}
      />
      <h6
        className={styles.fistCenterText}
        style={{ alignSelf: "center", justifySelf: "center" }}
      >
        {pre_title} <span className="text-blue">{highlighted}</span>
        {post_title}
      </h6>
    </div>
  );
};

export default ImagedTitleSection;
