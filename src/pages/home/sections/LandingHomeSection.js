import FamilyImage from "../../../assets/images/home/page1_right_family.png";
import ButtonPrimary from "../../../component/elements/button/ButtonPrimary";
import styles from "./LandingHomeSection.module.css";

const LandingHomeSection = () => {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <p className={styles.title}>
          Secure your well-being at any age with the right{" "}
          <span className={styles.coloredText}>insurance</span> plan.
        </p>
        <p className="text-secondary">
          Protect your family's savings from medical emergencies
        </p>
        <ButtonPrimary content={"Learn More"} />
      </section>
      <section className={styles.right}></section>
      <img src={FamilyImage} alt="Family image" />
    </div>
  );
};

export default LandingHomeSection;
