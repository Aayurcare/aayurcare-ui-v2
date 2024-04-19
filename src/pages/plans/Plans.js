import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import IntroWelcomeSection from "./section1/IntroWelcomeSection";
import PlanDetails from "./section2/PlanDetails";
import Footer from "../../component/footer/Footer";

const Plans = () => {
  return (
    <HomeToolbarLayout highlighted={1}>
      <IntroWelcomeSection />
      <PlanDetails />
      <Footer />
    </HomeToolbarLayout>
  );
};

export default Plans;
