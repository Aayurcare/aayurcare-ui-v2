import { style } from "@splidejs/splide/src/js/utils";
import ProfileContainer from "../ProfileContainer";
import styles from "./MyPlanDetails.module.css";
import ButtonSecondary from "../../../component/elements/button/ButtonSecondary";

import mockData from "../../../mocks/activePlans.json";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { fetchCustomerPlans } from "../../../api/myPlans";
import Loading from "react-loading";

const MyPlanDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [plans, setPlans] = useState([]);

  const fetchPlans = async () => {
    setIsLoading(true);
    try {
      const response = await fetchCustomerPlans();
      setPlans(response.data);
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  if (isLoading) {
    return (
      <ProfileContainer>
        <Loading type="bubbles" color="#114DD2" />
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <PlanItems purchasedPlans={plans}></PlanItems>
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

  const purchasedFor =
    purchasedPlan.purchasedFor.length > 1
      ? `${purchasedPlan.purchasedFor[0].name} and ${
          purchasedPlan.purchasedFor.length - 1
        } others`
      : purchasedPlan.purchasedFor[0].name;

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
          Purchased for {purchasedFor} on{" "}
          {new Date(purchasedPlan.createdAt).toLocaleString().split(",")[0]}
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
