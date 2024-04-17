import { useEffect, useState } from "react";
import HomeFirstImage from "../../../../assets/images/home/home_first_image.png";
import HomeFirstImagSM from "../../../../assets/images/home/home_first_image_sm.svg";

import ButtonPrimary from "../../../../component/elements/button/ButtonPrimary";
import styles from "./LandingHomeSection.module.css";

const LandingHomeSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 650);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 650);
    });
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <img
          src={isMobile ? HomeFirstImagSM : HomeFirstImage}
          className={styles.image}
        />
      </section>
      <section className={styles.right}>
        <p className={styles.title}>
          Secure your well-being{!isMobile && <br></br>} at any age with the{" "}
          {!isMobile && <br></br>}
          <span className={"text-blue"} style={{ display: "inline-block" }}>
            right plan.{" "}
          </span>{" "}
        </p>
        <p className={styles.description}>
          Protect your family's savings from medical emergencies
        </p>
        <ButtonPrimary
          content={"Learn More"}
          className={styles.buttonLearnMore}
        />
      </section>
    </div>
  );
};

export default LandingHomeSection;
