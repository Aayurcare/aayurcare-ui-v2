import { style } from "@splidejs/splide/src/js/utils";
import ProfileContainer from "../ProfileContainer";
import styles from "./MyPlanDetails.module.css";
import ButtonSecondary from "../../../component/elements/button/ButtonSecondary";

import mockData from "../../../mocks/activePlans.json";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const MyPlanDetails = () => {
  console.log(mockData.data);
  return (
    <ProfileContainer>
      <PlanItems purchasedPlans={mockData.data}></PlanItems>
      <ToastContainer />
    </ProfileContainer>
  );
};

const PlanItems = ({ purchasedPlans }) => {
  return (
    <section style={{ width: "100%", display: "flex" }}>
      {purchasedPlans.map((item) => (
        <PlanItem purchasedPlan={item} />
      ))}
    </section>
  );
};

const PlanItem = ({ purchasedPlan }) => {
  const [isClaimSubmitted, setIsClaimSubmitted] = useState(false);

  const submitClaim = () => {
    setIsClaimSubmitted(true);
    toast.success("Your claim request has been submitted.", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <article className={styles.planItem}>
      <span className={styles.planLeftArea}>
        <p className={styles.purchasedPlanName}>{purchasedPlan.planName}</p>
        <p className={styles.customerName}>
          Purchased for {purchasedPlan.customerName} on{" "}
          {new Date(purchasedPlan.issueDate).toISOString().split("T")[0]}
        </p>
        <p className={styles.date}>
          {" "}
          Valid till {new Date(purchasedPlan.expiryDate).toLocaleString()}
        </p>
      </span>
      <span>
        {isClaimSubmitted ? (
          "Claim submitted"
        ) : (
          <ButtonSecondary
            onClick={submitClaim}
            styles={{ border: "1px solid #ccc" }}
            content={"Submit Claim"}
          />
        )}
      </span>
    </article>
  );
};

export default MyPlanDetails;
