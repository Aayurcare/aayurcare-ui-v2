import { SectionContainerLeft } from "../../home/sections/SectionContainer";
import styles from "./PartnershipSection.module.css";
import aboutUsStyles from "../AboutUs.module.css";

import GreenClient from "../../../assets/images/aboutus/clients/green.jpeg";
import YogaFitnessClient from "../../../assets/images/aboutus/clients/yogafitness.png";
import AboradWaleClient from "../../../assets/images/aboutus/clients/aboradwale.jpeg";
import ZymatecClient from "../../../assets/images/aboutus/clients/zymantec.jpeg";
import PartnershipImg from "../../../assets/images/aboutus/partnership.png";
const PartnershipSection = () => {
  return (
    <div className={styles.container}>
      <p className={aboutUsStyles.subTitle}>
        Benefits for <span className="text-blue">Partnership</span>
      </p>
      <section className={styles.contentSection}>
        <ol className={styles.benefitsText}>
          <li>
            <span>
              <p className={styles.listTitle}>Zero Setup Cost</p>
              <p className={styles.listSubTtitle}>
                Get started without any initial expenses or fees.
              </p>
            </span>
          </li>
          <li>
            <span>
              <p className={styles.listTitle}>Life Long Association</p>
              <p className={styles.listSubTtitle}>
                Cultivating lasting connections, bound by trust and growth.
              </p>
            </span>
          </li>
          <li>
            <span>
              <p className={styles.listTitle}>ABDM Recurring Income</p>
              <p className={styles.listSubTtitle}>
                A sustainable source of continuous financial growth.{" "}
              </p>
            </span>
          </li>
          <li>
            <span>
              <p className={styles.listTitle}>Monthly Recurring Income</p>
              <p className={styles.listSubTtitle}>
                A reliable stream of income that replenishes monthly.{" "}
              </p>
            </span>
          </li>
          <li>
            <span>
              <p className={styles.listTitle}>Marketing and Branding</p>
              <p className={styles.listSubTtitle}>
                Amplifying your brand's presence and impact in the market.{" "}
              </p>
            </span>
          </li>
          <li>
            <span>
              <p className={styles.listTitle}>Dedicated Manpower</p>
              <p className={styles.listSubTtitle}>
                Deploying skilled personnel tailored to your specific needs and
                objectives.{" "}
              </p>
            </span>
          </li>
          <li>
            <span>
              <p className={styles.listTitle}>24% ROI Guarantee</p>
              <p className={styles.listSubTtitle}>
                Ensuring a secure return on investment with our steadfast
                commitment.{" "}
              </p>{" "}
            </span>
          </li>
        </ol>
        <img
          className={styles.partnershipImg}
          src={PartnershipImg}
          alt="Partners Image"
        />
      </section>
      <p className={aboutUsStyles.subTitle}>
        Our <span className="text-blue">Clients</span>
      </p>
      <div className={styles.clientsContainer}>
        <img
          className={styles.clientIconImage}
          src={GreenClient}
          alt="green-builders"
        />
        <img
          className={styles.clientIconImage}
          src={AboradWaleClient}
          alt="abroad-wale"
        />
        <img
          className={styles.clientIconImage}
          src={YogaFitnessClient}
          alt="yoga-wale"
        />
        <img
          className={styles.clientIconImage}
          src={ZymatecClient}
          alt="zymatec"
        />
      </div>
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

export default PartnershipSection;
