import HomeFirstImage from "../../../../assets/images/home/home_first_image.png";
import ButtonPrimary from "../../../../component/elements/button/ButtonPrimary";
import styles from "./LandingHomeSection.module.css";

const LandingHomeSection = () => {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <img src={HomeFirstImage} className={styles.image} />
      </section>
      <section className={styles.right}>
        <p className={styles.title}>
          Secure your well-being<br></br> at any age with <br></br>the right{" "}
          <span className={"text-blue"}> insurance</span> plan.
        </p>
        <p className="text-secondary">
          Protect your family's savings from medical emergencies
        </p>
        <ButtonPrimary content={"Learn More"} />
      </section>
    </div>
  );
};

export default LandingHomeSection;
