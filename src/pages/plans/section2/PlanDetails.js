import styles from "./PlanDetails.module.css";
import { useEffect, useState } from "react";
import ButtonPrimary from "../../../component/elements/button/ButtonPrimary";
import useIsMobile from "../../../hooks/useIsMobile";
import PlanEnquiryModal from "../dialogs/PlanEnquiryModal";
import { PLANS_URL } from "../../../api/urls";
import ReactLoading from "react-loading";
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
      const response = await fetch(PLANS_URL);
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
    setSelected(index);
  };

  if (!plans) {
    return (
      <span
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ReactLoading
          type="bubbles"
          color="#114DD2"
          className={styles.spinner}
        />
      </span>
    );
  }

  return (
    <div className={styles.planDetailsContainer}>
      <span className={styles.chipsContainer}>
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
      <p
        style={{
          textAlign: "center",
          width: "80%",
          alignSelf: "center",
          color: "#444",
          fontSize: "14px",
        }}
      >
        * Disclaimer-Aayur Care provides medical reimbursement plans at
        concessional or subsidized rates. Depending on customer requirements,
        these plans may or may not be classified as insurance products or
        offerings.
      </p>
    </div>
  );
};

const Chip = ({ index, plan, changeSelection, isSelected }) => {
  if (!plan.title) {
    return;
  }
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
