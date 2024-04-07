import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import CustomizeHealthPlan from "./sections/section1/CustomizeHealthPlan";
import LandingHomeSection from "./sections/LandingHomeSection";
import ServicesOffer from "./sections/ServicesOffer";
import WhyAayurCare from "./sections/section2/WhyAayurCare";

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
    </HomeToolbarLayout>
  );
};

export default HomeDashboard;
