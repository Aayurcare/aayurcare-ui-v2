import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import CustomizeHealthPlan from "./sections/section1/CustomizeHealthPlan";
import LandingHomeSection from "./sections/LandingHomeSection";
import ServicesOffer from "./sections/section3/ServicesOffer";
import WhyAayurCare from "./sections/section2/WhyAayurCare";
import VitalLinks from "./sections/section4/VitalLinks";
import WordsOfTrust from "./sections/section5/WordsOfTrust";
import QnA from "./sections/section6/QnA";

const HomeDashboard = () => {
  const styles = {
    firstBackgroud: {},
    secondBackground: {},
  };
  return (
    <HomeToolbarLayout>
      <LandingHomeSection />
      <CustomizeHealthPlan />
      <WhyAayurCare />
      <ServicesOffer />
      <VitalLinks />
      <WordsOfTrust />
      <QnA />
    </HomeToolbarLayout>
  );
};

export default HomeDashboard;
