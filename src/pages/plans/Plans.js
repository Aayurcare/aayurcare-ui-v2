import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import IntroWelcomeSection from "./section1/IntroWelcomeSection";
import PlanDetails from "./section2/PlanDetails";
import Footer from "../../component/footer/Footer";
import useIsMobile from "../../hooks/useIsMobile";
import { SectionContainerLeft } from "../home/sections/SectionContainer";

const Plans = () => {
  const isMobile = useIsMobile();
  return (
    <HomeToolbarLayout highlighted={1}>
      <IntroWelcomeSection />
      <PlanDetails />
      <Footer />
    </HomeToolbarLayout>
  );
};

export default Plans;
