import ImagedTitleSection from "../../component/sections/ImagedTitleSection";
import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import Footer from "../../component/footer/Footer";
import styles from "./Services.module.css";
import {
  SectionContainerLeft,
  SectionContainerRight,
} from "../home/sections/SectionContainer";
import WelcomeToAayurSection from "./section1/WelcomeToAayurSection";
import { CallbackCard } from "../home/sections/section6/QnA";

//Images Import
import BackgroundImage from "../../assets/images/services/services_bg.png";
import ImageWatch from "../../assets/images/services/aside_img_1_watch.png";
import ImageCalendar from "../../assets/images/services/aside_img_2_calendar.png";
import ImagePatient from "../../assets/images/services/aside_img_3_patient.png";
import ImageStairs from "../../assets/images/services/aside_img_4_stairs.png";
import ImagePhone from "../../assets/images/services/aside_img_5_phone.png";
import ImageGlobe from "../../assets/images/services/aside_img_6_globe.png";
import useIsMobile from "../../hooks/useIsMobile";

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <HomeToolbarLayout highlighted={2}>
      <ImagedTitleSection
        backgroundImage={BackgroundImage}
        pre_title={"Elevate your wellbeing through our "}
        highlighted={"services."}
      />
      <WelcomeToAayurSection />
      <SectionContainerRight styles={{ marginTop: "25vh" }}>
        <div className={styles.containerRight}>
          <CallbackCard />
          <br></br>
          <br></br>
          <br></br>
          <ServiceCard
            image={ImageWatch}
            title={"Health Card Activation within 48 hours"}
            image_alignment={"left"}
            description={
              "Our streamlined process ensures that you can access your health coverage swiftly and hassle-free. Whether you prefer online or phone activation, we've got you covered. Simply visit our website or call our dedicated hotline to get confirmation. From routine check-ups to emergency care, your well-being is our priority."
            }
          />
          <ServiceCard
            image={ImageCalendar}
            title={"Reimbursements within 7 working days*"}
            image_alignment={"right"}
            description={
              "Experience swift and hassle-free reimbursements with our commitment to processing claims within just 7 working days*. Whether it's medical expenses, prescription costs, or other eligible healthcare expenditures, we understand the importance of timely reimbursement. Our efficient system ensures that your claims are processed promptly, providing you with financial relief when you need it most."
            }
          />
        </div>
      </SectionContainerRight>
      <SectionContainerLeft>
        <div
          style={{ marginTop: isMobile ? "200vh" : "320px" }}
          className={styles.containerRight}
        >
          <ServiceCard
            image={ImagePatient}
            title={"Benefits are applicable to OPD and  IPD Categories*"}
            image_alignment={"left"}
            description={
              "Enjoy comprehensive coverage across both Outpatient (OPD) and Inpatient (IPD) categories with our range of benefits tailored to your healthcare needs. Whether you require routine doctor visits, diagnostic tests, or hospitalization, our benefits extend to both outpatient and inpatient services. With our commitment to providing holistic care, you can access a wide range of medical services and treatments with ease and convenience."
            }
          />
          <ServiceCard
            image={ImageStairs}
            title={"No wait period"}
            image_alignment={"right"}
            description={
              "Experience the freedom of immediate access to healthcare benefits with our \"No Wait Period\" policy. Say goodbye to the frustration of waiting periods typically associated with health insurance plans. With us, there's no waiting around when it comes to accessing the care you need. Whether you're seeking routine check-ups, specialist consultations, or diagnostic procedures, our policy ensures that you can utilize your benefits from day one of enrollment."
            }
          />
        </div>
      </SectionContainerLeft>
      <SectionContainerRight>
        <div
          style={{ marginTop: isMobile ? "230vh" : "320px" }}
          className={styles.containerRight}
        >
          <ServiceCard
            image={ImagePhone}
            title={"Introducing Top-Up Facilities*"}
            image_alignment={"left"}
            description={
              "We're excited to introduce our latest offering: Top-Up Facilities*. Elevate your healthcare coverage to new heights with our top-up options designed to complement your existing plan. For those who are looking for extension of our services our top-up facilities have you covered. With flexible options tailored to your needs, you can customise your plan to suit your lifestyle and healthcare requirements."
            }
          />
          <ServiceCard
            image={ImageGlobe}
            title={"Pan India Claim*"}
            image_alignment={"right"}
            description={
              "Introducing Pan India Claim*, a seamless and comprehensive solution for healthcare coverage across the nation. With our Pan India Claim* service, you can access medical treatment and submit claims anywhere in India, regardless of your location."
            }
          />
        </div>
      </SectionContainerRight>
      {isMobile && <SectionContainerLeft></SectionContainerLeft>}
      {isMobile && (
        <SectionContainerRight
          styles={{ height: "90vh" }}
        ></SectionContainerRight>
      )}
      <Footer />
    </HomeToolbarLayout>
  );
};

const ServiceCard = ({ image, title, description, image_alignment }) => {
  const isMobile = useIsMobile();

  const _styles = {
    display: "flex",
    flexDirection: image_alignment == "left" ? "row" : "row-reverse",
  };
  if (isMobile) {
    _styles.flexDirection = "column";
  }
  return (
    <article className={styles.serviceArticle} style={_styles}>
      <img className={styles.serviceImage} src={image} alt={title} />
      <span className={styles.serviceContent}>
        <p className={styles.serviceTitle}>{title}</p>
        <p className={styles.serviceDescription}>{description}</p>
      </span>
    </article>
  );
};

export default Services;
