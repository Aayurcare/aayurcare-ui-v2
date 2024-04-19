import React, { useState } from "react";
import styles from "./QnA.module.css";
import Collapsible from "react-collapsible";
import Collapse from "../../../../assets/images/home/qna/collapse.svg";
import Expand from "../../../../assets/images/home/qna/expand.svg";
import GroupProfiles from "../../../../assets/images/home/qna/group_profiles.png";
import { SectionContainerRight } from "../SectionContainer";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast, Bounce } from "react-toastify";

const QnA = () => {
  return (
    <SectionContainerRight>
      <div className={styles.contentSubContainer}>
        <p className="title-home">
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
        trigger={TriggerElement(
          isExpanded[0],
          "What is included in your health membership plan?"
        )}
        onTriggerOpening={() => toggleExpanded(0)}
        onTriggerClosing={() => toggleExpanded(0)}
      >
        <p>
          The membership plan typically includes OPD consultations with the
          primary doctory, access to pathology and radiology services, as well
          as provision for medicines. However, the specifics may vary depending
          on the chosen plan.
        </p>
      </Collapsible>
      <hr className={styles.qnaHR} />
      <Collapsible
        trigger={TriggerElement(
          isExpanded[1],
          "How do I sign up for the health membership plan?"
        )}
        onTriggerOpening={() => toggleExpanded(1)}
        onTriggerClosing={() => toggleExpanded(1)}
      >
        <p>
          Signing up is easy; visit our website, follow the registration
          process, and select the appropriate membership tier before completing
          payment.
        </p>
      </Collapsible>
      <hr className={styles.qnaHR} />
      <Collapsible
        trigger={TriggerElement(
          isExpanded[2],
          "Are there any waiting periods for accessing benefits?"
        )}
        onTriggerOpening={() => toggleExpanded(2)}
        onTriggerClosing={() => toggleExpanded(2)}
      >
        <p>
          There is no waiting period for accessing the benefits included in the
          membership plan.
        </p>
      </Collapsible>
      <hr className={styles.qnaHR} />
      <Collapsible
        trigger={TriggerElement(
          isExpanded[3],
          "Is my personal health information kept confidential and secure?"
        )}
        onTriggerOpening={() => toggleExpanded(3)}
        onTriggerClosing={() => toggleExpanded(3)}
      >
        <p>
          Absolutely, we adhere to strict data privacy regulations to ensure
          your information is secure and confidential.
        </p>
      </Collapsible>
      <hr className={styles.qnaHR} />
      <Collapsible
        trigger={TriggerElement(
          isExpanded[4],
          "How can I contact customer support for further questions?"
        )}
        onTriggerOpening={() => toggleExpanded(4)}
        onTriggerClosing={() => toggleExpanded(4)}
      >
        <p>
          Our 24x7 customer support is available via email, phone, and live chat
          for any assistance you may need.
        </p>
      </Collapsible>
      <hr className={styles.qnaHR} />
      <Collapsible
        trigger={TriggerElement(
          isExpanded[5],
          "How does medicine inclusion work?"
        )}
        onTriggerOpening={() => toggleExpanded(5)}
        onTriggerClosing={() => toggleExpanded(5)}
      >
        <p>
          Members have access to essential medicines at no extra cost,
          prescribed by affiliated healthcare providers.
        </p>
      </Collapsible>
      <hr className={styles.qnaHR} />
      <Collapsible
        trigger={TriggerElement(
          isExpanded[6],
          "How do I avail OPD reimbursement?"
        )}
        onTriggerOpening={() => toggleExpanded(6)}
        onTriggerClosing={() => toggleExpanded(6)}
      >
        <p>
          Pay upfront for medical services, keep original receipts, and submit
          reimbursement claims through our portal or app.
        </p>
      </Collapsible>
    </div>
  );
};

const TriggerElement = (isExpanded, text) => {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <b style={{ display: "inline-block", fontWeight: "600" }}>{text}</b>
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
      <img src={GroupProfiles} className={styles.profileSectionImage} />
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
