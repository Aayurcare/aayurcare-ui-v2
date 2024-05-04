import {
  SectionContainerLeft,
  SectionContainerRight,
} from "../../home/sections/SectionContainer";
import styles from "./PlanDetails.module.css";

import mockJson from "../../../mocks/heathPlans.json";
import { useEffect, useState } from "react";
import ButtonPrimary from "../../../component/elements/button/ButtonPrimary";
import useIsMobile from "../../../hooks/useIsMobile";

const PlanDetails = () => {
  const [parentPlans, setParentPlans] = useState({});
  const [selected, setSelected] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    setParentPlans(mockJson.data);
    setSelected(0);
  }, []);

  const changeSelection = (index) => {
    console.log("Set " + index);
    setSelected(index);
  };

  return (
    <SectionContainerRight>
      <div className={styles.planDetailsContainer}>
        <span style={{ alignSelf: "center" }}>
          {mockJson.data.map((item, index) => (
            <Chip
              index={index}
              plan={item}
              changeSelection={changeSelection}
              isSelected={selected == index}
              key={index}
            />
          ))}
        </span>
        <section className={styles.plansContainer}>
          {mockJson.data[selected].plans.map((item, index) => (
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
      >
        Request Callback
      </ButtonPrimary>
    </article>
  );
};

export default PlanDetails;
