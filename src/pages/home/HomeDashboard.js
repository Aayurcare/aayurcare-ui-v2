import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import CustomizeHealthPlan from "./sections/1customizehealthplans/CustomizeHealthPlan";
import LandingHomeSection from "./sections/landing/LandingHomeSection";
import ServicesOffer from "./sections/section3/ServicesOffer";
import WhyAayurCare from "./sections/section2/WhyAayurCare";
import VitalLinks from "./sections/section4/VitalLinks";
import WordsOfTrust from "./sections/section5/WordsOfTrust";
import QnA from "./sections/section6/QnA";
import Footer from "../../component/footer/Footer";
import useIsMobile from "../../hooks/useIsMobile";
import {
  SectionContainerLeft,
  SectionContainerRight,
} from "./sections/SectionContainer";

const HomeDashboard = () => {
  const isMobile = useIsMobile();
  return (
    <HomeToolbarLayout highlighted={0}>
      <LandingHomeSection />
      <CustomizeHealthPlan />
      <WhyAayurCare />
      <ServicesOffer />
      {/* <VitalLinks /> */}

      <QnA />
      {/*{isMobile && (
        <SectionContainerLeft
          styles={{ height: "20vh" }}
        ></SectionContainerLeft>
      )}{" "}
      */}
      <Footer />
    </HomeToolbarLayout>
  );
};

export default HomeDashboard;
