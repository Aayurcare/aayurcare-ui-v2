import {
  SectionContainerLeft,
  SectionContainerRight,
} from "../../home/sections/SectionContainer";
import styles from "./PlanDetails.module.css";

import mockJson from "../../../mocks/heathPlans.json";
import { useEffect, useState } from "react";
import ButtonPrimary from "../../../component/elements/button/ButtonPrimary";
import useIsMobile from "../../../hooks/useIsMobile";
import PlanEnquiryModal from "../dialogs/PlanEnquiryModal";

const PlanDetails = () => {
  const [plans, setPlans] = useState(null);
  const [selected, setSelected] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    fetchPlans();
    setSelected(0);
  }, []);

  async function fetchPlans() {
    try {
      const response = await fetch("http://localhost:3001/v1/plans");
      if (!response.ok) {
        throw new Error("Unable to fetch plans");
      }
      const json = await response.json();
      setPlans(json.data);
    } catch (error) {
      alert(error.message);
    }
  }

  const changeSelection = (index) => {
    console.log("Set " + index);
    setSelected(index);
  };

  if (!plans) {
    return <p>Loading...</p>;
  }

  return (
    <SectionContainerRight>
      <div className={styles.planDetailsContainer}>
        <span style={{ alignSelf: "center" }}>
          {plans.map((item, index) => (
            <Chip
              index={index}
              plan={item}
              changeSelection={changeSelection}
              isSelected={selected === index}
              key={index}
            />
          ))}
        </span>
        <section className={styles.plansContainer}>
          {plans[selected]?.plans.map((item, index) => (
            <Plan plan={item} key={index} />
          ))}
        </section>
      </div>
    </SectionContainerRight>
  );
};

const Chip = ({ index, plan, changeSelection, isSelected }) => {
  return (
    <span
      className={styles.titleChip}
      style={isSelected ? { backgroundColor: "#114DD2", color: "white" } : {}}
      onClick={() => changeSelection(index)}
    >
      {plan.title}
    </span>
  );
};

const Plan = ({ plan }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={styles.planCard}>
      <p className={styles.planName}>{plan.planName}</p>
      <p className={styles.planPrice + " text-blue"}>
        Rs {plan.price}
        <span className={styles.planDays}> {plan.days}</span>
      </p>
      <p className={styles.planDescription}>{plan.description}</p>
      <ButtonPrimary
        content={"Request Callback"}
        className={styles.buttonCallBack}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Request Callback
      </ButtonPrimary>
      <PlanEnquiryModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        plan={plan}
      ></PlanEnquiryModal>
    </article>
  );
};

export default PlanDetails;
