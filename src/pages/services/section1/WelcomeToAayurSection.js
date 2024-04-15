import { CardSection } from "../../home/sections/section3/ServicesOffer";
import { SectionContainerLeft } from "../../home/sections/SectionContainer";
import styles from "./WelcomeToAayurSection.module.css";

const WelcomeToAayurSection = () => {
  return (
    <SectionContainerLeft styles={{ marginTop: "20vh", zIndex: -2 }}>
      <div className={styles.container}>
        <p className="subTitle">
          Welcome to AAYUR CARE: Your Path to{" "}
          <span className="text-blue">Holistic Health</span>
        </p>
        <p style={{ marginBottom: "100px" }}>
          Welcome to AAYUR CARE, where holistic health is our priority. Our
          personalized approach ensures tailored care plans to meet your unique
          needs. Experience comprehensive services, integrating conventional and
          alternative therapies for optimal wellness. With patient-centered
          care, you're actively involved in decision-making processes. We offer
          continuity of care, providing support throughout your health journey.
          Discover the AAYUR CARE difference and embark on a path to holistic
          healing today. Contact us to schedule a consultation and begin your
          journey to wellness. We're here to support you every step of the way.
        </p>
        <CardSection />
      </div>
    </SectionContainerLeft>
  );
};

export default WelcomeToAayurSection;
