import { useEffect, useState } from "react";
import HomeFirstImage from "../../../../assets/images/home/home_first_image.png";
import HomeFirstImagSM from "../../../../assets/images/home/home_first_image_sm.svg";

import ButtonPrimary from "../../../../component/elements/button/ButtonPrimary";
import styles from "./LandingHomeSection.module.css";

const LandingHomeSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 550);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 550);
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
          Secure your well-being{!isMobile && <br></br>}at any age with{" "}
          {!isMobile && <br></br>}the right{" "}
          <span className={"text-blue"} style={{ display: "inline-block" }}>
            {" "}
            insurance
          </span>{" "}
          plan.
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
