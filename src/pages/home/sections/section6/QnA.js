import React, { useState } from "react";
import styles from "./QnA.module.css";
import Collapsible from "react-collapsible";
import Collapse from "../../../../assets/images/home/qna/collapse.jpg";
import Expand from "../../../../assets/images/home/qna/expand.jpg";
import GroupProfiles from "../../../../assets/images/home/qna/group_profiles.png";
import { SectionContainerRight } from "../SectionContainer";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast, Bounce } from "react-toastify";

const QnA = () => {
  return (
    <SectionContainerRight>
      <div className={styles.contentSubContainer}>
        <p className={styles.title}>
          Answers To Your Most Common <br></br>Questions:{" "}
          <span className="text-blue">FAQ</span>
        </p>
        <CollapsibleSection />
        <ProfileSection />
        <CallbackCard />
      </div>
    </SectionContainerRight>
  );
};

const CollapsibleSection = () => {
  let [isExpanded, setIsExpanded] = useState(
    Array.from({ length: 7 }, () => false)
  );

  const toggleExpanded = (index) => {
    setIsExpanded((prevState) =>
      prevState.map((expanded, i) => (i === index ? !expanded : expanded))
    );
  };

  return (
    <div className={styles.collapsableSection}>
      <Collapsible
        trigger={TriggerElement(isExpanded[0])}
        onTriggerOpening={() => toggleExpanded(0)}
        onTriggerClosing={() => toggleExpanded(0)}
      >
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
      <hr />
      <Collapsible
        trigger={TriggerElement(isExpanded[1])}
        onTriggerOpening={() => toggleExpanded(1)}
        onTriggerClosing={() => toggleExpanded(1)}
      >
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
      <hr />
      <Collapsible
        trigger={TriggerElement(isExpanded[2])}
        onTriggerOpening={() => toggleExpanded(2)}
        onTriggerClosing={() => toggleExpanded(2)}
      >
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
      <hr />
      <Collapsible
        trigger={TriggerElement(isExpanded[2])}
        onTriggerOpening={() => toggleExpanded(2)}
        onTriggerClosing={() => toggleExpanded(2)}
      >
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
      <hr />
      <Collapsible
        trigger={TriggerElement(isExpanded[2])}
        onTriggerOpening={() => toggleExpanded(2)}
        onTriggerClosing={() => toggleExpanded(2)}
      >
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
      <hr />
      <Collapsible
        trigger={TriggerElement(isExpanded[2])}
        onTriggerOpening={() => toggleExpanded(2)}
        onTriggerClosing={() => toggleExpanded(2)}
      >
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
      <hr />
      <Collapsible
        trigger={TriggerElement(isExpanded[2])}
        onTriggerOpening={() => toggleExpanded(2)}
        onTriggerClosing={() => toggleExpanded(2)}
      >
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>
      <hr />
    </div>
  );
};

const TriggerElement = (isExpanded) => {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <b style={{ display: "inline-block", fontWeight: "600" }}>
        What is included in your health membership plan ?
      </b>
      <img
        src={isExpanded ? Collapse : Expand}
        alt={isExpanded ? "Collapse" : "Expand"}
      />
    </span>
  );
};

const ProfileSection = () => {
  return (
    <span className={styles.profileSection}>
      <img src={GroupProfiles} />
      <p>Still have any questions?</p>
      <p className={styles.subTitle}>
        Unveiling Clarity: Your Go-To Guide for Frequently Asked <br></br>
        Questions
      </p>
    </span>
  );
};

const CallbackCard = () => {
  const notify = () =>
    toast.success("Thank you, We will get back to you", {
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

  return (
    <div className={styles.callBackSection}>
      <section className={styles.leftCallBackSection}>
        <h2>
          Do you have any questions about the<br></br> services we offer?
        </h2>
        <p>Lets Talk to Our Team!</p>
      </section>
      <aside className={styles.callBackCard}>
        <h4>Request call back</h4>
        <input className={styles.textInput} type="text" placeholder="Name" />
        <input
          className={styles.textInput}
          type="number"
          placeholder="Mobile number"
        />
        <span
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="checkbox"
            placeholder="Also whatsapp number"
            value="Also whatsapp number"
            name="check"
            style={{
              height: "20px",
              color: "#666666",
              marginBottom: "0",
              marginRight: "7px",
            }}
          />
          <label
            for="check"
            style={{
              fontSize: "12px",
              color: "#666666",
              display: "inline-block",
              alignContent: "center",
            }}
          >
            Also whatsapp number
          </label>
        </span>
        <button onClick={notify} className={styles.buttonRequest}>
          Request Call
        </button>
        <ToastContainer />
      </aside>
    </div>
  );
};

export { CallbackCard };

export default QnA;
