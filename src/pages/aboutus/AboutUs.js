import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import styles from "./AboutUs.module.css";

import BackgroundImage from "../../assets/images/aboutus/about_us_bg.png";
import {
  SectionContainerLeft,
  SectionContainerRight,
} from "../home/sections/SectionContainer";
import JoinUsSection from "./section2/JoinUsSection";
import JourneySection from "./section3/JourneySection";
import FranchiseEnquirySection from "./section4/FranchiseEnquirySection";
import PartnershipSection from "./section5/PartnershipSection";
import Footer from "../../component/footer/Footer";
import ImagedTitleSection from "../../component/sections/ImagedTitleSection";
import useIsMobile from "../../hooks/useIsMobile";

const AboutUs = () => {
  const isMobile = useIsMobile();

  return (
    <HomeToolbarLayout highlighted={3}>
      <ImagedTitleSection
        backgroundImage={BackgroundImage}
        pre_title={"Discover more "}
        highlighted={"about us."}
      />

      <div className={styles.whoWeAreSection}>
        <p className={styles.title + " text-blue"}>Who we are ?</p>
        <p className={styles.subTitle}>Zymantec BPO Solutions PVT.LTD.</p>
        <p className={styles.textContent}>
          ZYMANTEC BPO SOLUTIONS PVT.LTD is a leading IT Solutions and BPO
          company in India that delivers integrated solutions and customized
          outsourcing services. We use our expertise and understanding of data
          to optimize processes, streamline operations, and drive growth in
          business for our clients.<br></br> <br></br>
          <br></br>ZYMANTEC is based in Bangalore, Karnataka, India. We are
          engaged in delivering IT services to onshore and offshore Clients. We
          are specialized in the delivery of integrated solutions that leverage
          its expertise in BPO. We are offering our clients a unique advantage
          by our integrated approach in designing and implementing customized
          outsourcing solutions. We consult our clients to understand their
          needs and internal processes and build solutions accordingly and
          implement them while ensuring continuity in services. We are a
          fast-growing business entity providing Data publishing, Data entry and
          data conversion services in various domains by engaging with selected
          clients. We engage with selected clients where we are confident of
          adding value to their business.
        </p>
        <p className={styles.subTitle}>
          <br></br>
          Aayur care Powered by <span className="text-blue"> Zymantec</span>
        </p>
        <p className={styles.textContent}>
          Welcome to AAYUR CARE - your premier destination for transformative
          health-tech solutions. We are a dynamic startup at the forefront of
          revolutionizing healthcare experiences. Our mission? To bring
          cutting-edge, technology-driven healthcare services to every corner of
          India. With a commitment to enhancing individual and community
          well-being, we're dedicated to ushering in a new era of personalized,
          accessible healthcare solutions for all.
        </p>
      </div>

      <JoinUsSection />
      <JourneySection />
      <FranchiseEnquirySection />
      <PartnershipSection />
      <Footer />
    </HomeToolbarLayout>
  );
};

export default AboutUs;
