import { SectionContainerRight } from "../../home/sections/SectionContainer";
import styles from "./FranchiseEnquirySection.module.css";

import FranchiseEnquiryImg from "../../../assets/images/aboutus/franchise_enquiry.png";

const FranchiseEnquirySection = () => {
  return (
    <SectionContainerRight>
      <div className={styles.container}>
        <EnquiryCard />
        <Cards />
      </div>
    </SectionContainerRight>
  );
};

const EnquiryCard = () => {
  return (
    <div className={styles.enquiryCard}>
      <p className={styles.enquiryTitle}>
        Intrested in partnering or franchising with us?
      </p>
      <section className={styles.subSectionEnquiry}>
        <section>
          <img
            className={styles.asideImageEnquiry}
            src={FranchiseEnquiryImg}
            alt="Enquiry img"
          />
        </section>
        <section className={styles.inputSection}>
          <div className={styles.enquiryNameInput}>
            <input
              placeholder="First name"
              className={styles.nameInput}
              type="text"
              style={{ marginRight: "10px", flexGrow: 1 }}
            />
            <input
              placeholder="Last name"
              className={styles.nameInput}
              type="text"
              style={{ marginLeft: "10px", flexGrow: 1 }}
            />
          </div>
          <input placeholder="E-mail" type="email" className={styles.input} />
          <input placeholder="E-mail" type="email" className={styles.input} />
          <input placeholder="E-mail" type="email" className={styles.input} />
          <input placeholder="E-mail" type="email" className={styles.input} />
          <button>Send</button>
        </section>
      </section>
    </div>
  );
};

const Cards = () => {
  return (
    <section className={styles.cardSection}>
      <article className={styles.cardItem + " " + styles.active}>
        <p className={styles.cardTitle}>Hex Integrated Claim Stack</p>
        <p className={styles.cardTitle}>
          Streamlining claims processing with comprehensive integration and
          efficiency
        </p>
      </article>
      <article className={styles.cardItem}>
        <p className={styles.cardTitle}>Digital Health Hub</p>
        <p className={styles.cardTitle}>
          Your centralized platform for modern healthcare solutions and
          resources.
        </p>
      </article>
      <article className={styles.cardItem}>
        <p className={styles.cardTitle}>Aayurcare Partner</p>
        <p className={styles.cardTitle}>
          Partnering with insurance for holistic healthcare solutions.
        </p>
      </article>
    </section>
  );
};

export default FranchiseEnquirySection;
