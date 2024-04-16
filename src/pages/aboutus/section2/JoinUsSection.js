import styles from "./JoinUsSection.module.css";
import { SectionContainerRight } from "../../home/sections/SectionContainer";
//Logos imports
import PolicyBaazarLogo from "../../../assets/images/aboutus/logos/policybaazar.svg";
import HealthiansLogo from "../../../assets/images/aboutus/logos/healthians.svg";
import BajajLogo from "../../../assets/images/aboutus/logos/bajaj.svg";
import RedCliffeLogo from "../../../assets/images/aboutus/logos/redcliffe.svg";
import PharmeasyLogo from "../../../assets/images/aboutus/logos/pharmeasy.svg";

import useIsMobile from "../../../hooks/useIsMobile";

const JoinUsSection = () => {
  return (
    <SectionContainerRight>
      <div className={styles.contentContainer}>
        <p className={styles.textContent}>
          Join us as we shape the future of healthcare together.
        </p>
        <p className={styles.textContent}>
          We, at AAYUR CARE, hold the firm belief that every individual is
          entitled to receive the highest quality of care, customized to suit
          their specific requirements and preferences. We are dedicated to
          ensuring that each person receives personalized attention and
          treatment that aligns with their unique healthcare needs. This
          commitment drives us to continually innovate and adapt our services to
          provide comprehensive and effective care for all.{" "}
        </p>
        <p className={styles.textContent}>
          At AAYUR CARE, safeguarding privacy and security stands as a paramount
          priority. We go to great lengths to protect user data, utilizing it
          exclusively to bolster their health outcomes. Upholding the most
          stringent standards of ethics and transparency is non-negotiable for
          us, nurturing a culture of trust and confidence among our valued users
        </p>
        <p className={styles.textContent}>
          At AAYUR CARE, we are driven by a vision of a world where health and
          care seamlessly intertwine with daily existence, empowering
          individuals to lead lives that are not just healthier, but also more
          joyful and purposeful.{" "}
        </p>
        <section className={styles.cardLogoContainer}>
          <img
            src={RedCliffeLogo}
            alt="redcliff logo"
            className={styles.logoPartners}
          />
          <img
            src={HealthiansLogo}
            alt="healthians logo"
            className={styles.logoPartners}
          />
          <img
            src={PharmeasyLogo}
            alt="pharmeasy logo"
            className={styles.logoPartners}
          />
          <img
            src={PolicyBaazarLogo}
            alt="policybaazar logo"
            className={styles.logoPartners}
          />
          <img
            src={BajajLogo}
            alt="bajaj logo"
            className={styles.logoPartners}
          />
        </section>
        <p className={styles.subTitle}>
          Join our mission for accessible health through tech innovation.
        </p>
      </div>
    </SectionContainerRight>
  );
};

export default JoinUsSection;
