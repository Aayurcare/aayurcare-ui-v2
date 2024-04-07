import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import CustomizeHealthPlan from "./sections/section1/CustomizeHealthPlan";
import LandingHomeSection from "./sections/LandingHomeSection";
import ServicesOffer from "./sections/section3/ServicesOffer";
import WhyAayurCare from "./sections/section2/WhyAayurCare";
import VitalLinks from "./sections/section4/VitalLinks";

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
    </HomeToolbarLayout>
  );
};

export default HomeDashboard;
