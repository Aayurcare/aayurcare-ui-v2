import React, { useState } from "react";
import styles from "./PlanEnquiryModal.module.css";
import Modal from "react-modal";

import SeniorImage from "../../../assets/images/plans/senior_dialog_aside.png";
import FamilyImage from "../../../assets/images/plans/family_dialog_aside.png";
import IndividualImage from "../../../assets/images/plans/individual_dialog_aside.png";
import CloseIcon from "../../../assets/icons/close_modal.svg";

import ConsultationIcon from "../../../assets/icons/modal/consultation.svg";
import MedicineIcon from "../../../assets/icons/modal/medicine.svg";
import PathologyIcon from "../../../assets/icons/modal/pathology.svg";
import RadiologyIcon from "../../../assets/icons/modal/radiology.svg";
import VirutalCardIcon from "../../../assets/icons/modal/virtual_card.svg";

const PlanEnquiryModal = ({ isOpen, plan, setIsOpen }) => {
  const customStyles = {
    content: {
      padding: 0,
      borderRadius: "10px",
      border: "none",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={() => {}}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className={styles.modalContainer}>
          <ImageContainer setIsOpen={setIsOpen} plan={plan} />
          <FormContainer plan={plan} />
        </div>
      </Modal>
    </div>
  );
};

const ImageContainer = ({ plan, setIsOpen }) => {
  const image = getImageOfPlan(plan);
  return (
    <aside
      className={styles.imageContainer}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <span className={styles.closeContainer}>
        <img
          className={styles.iconClose}
          src={CloseIcon}
          alt="close"
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <p className={styles.imageTitle}>{plan.category} Plan</p>
        <span>&nbsp;</span>
      </span>

      <div className={styles.planCard}>
        <p className={styles.planName}>{plan.planName}</p>
        <span className={styles.planPriceAndDays}>
          <p className={styles.planPrice}>Rs.{plan.price} </p>
          <p className={styles.planDays}>{plan.days}</p>
        </span>
        <p className={styles.planDescription}>{plan.description}</p>
      </div>
      <div className={styles.imageFeaturesCard}></div>

      <div className={styles.planFeaturesCard}>
        <span>
          <img className={styles.planIcon} src={ConsultationIcon} alt="icon" />
          <p className={styles.planFeatureName}>Consultation</p>
          <p className={styles.planFeatureDescription}>
            Connecting expertise to empower decisions.
          </p>
        </span>
        <span>
          <img className={styles.planIcon} src={MedicineIcon} alt="icon" />
          <p className={styles.planFeatureName}>Medicine</p>
          <p className={styles.planFeatureDescription}>
            Transforming pain into hope, illness into wellness.
          </p>
        </span>
        <span>
          <img className={styles.planIcon} src={PathologyIcon} alt="icon" />
          <p className={styles.planFeatureName}>Pathology</p>
          <p className={styles.planFeatureDescription}>
            Illuminating the path to precision health solutions.
          </p>
        </span>
        <span>
          <img className={styles.planIcon} src={RadiologyIcon} alt="icon" />
          <p className={styles.planFeatureName}>Radiology</p>
          <p className={styles.planFeatureDescription}>
            Shaping diagnoses, guiding treatments, saving lives.
          </p>
        </span>
        <span>
          <img className={styles.planIcon} src={VirutalCardIcon} alt="icon" />
          <p className={styles.planFeatureName}>Virtual Card</p>
          <p className={styles.planFeatureDescription}>
            Simplifying transactions, amplifying convenience.
          </p>
        </span>
      </div>
    </aside>
  );
};

const FormContainer = ({ plan }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    age: "",
    language: "pref",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.mobile) {
      formErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.age) {
      formErrors.age = "Age is required";
    } else if (formData.age < 18) {
      formErrors.age = "Age must be at least 18";
    }
    if (formData.language === "pref") {
      formErrors.language = "Preferred language is required";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <aside className={styles.formContainer}>
      <p className={styles.formTitle}>
        Start your health cover with Aayur care today!
      </p>
      <p className={styles.formDescription}>
        Create an account with Aayurcare to access personalized health benefits
        and secure your future with ease.
      </p>

      <form onSubmit={handleSubmit} className={styles.formSection}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className={styles.formInput}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}

        <input
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Mobile Number"
          type="number"
        />
        {errors.mobile && <p className={styles.error}>{errors.mobile}</p>}

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Email"
          type="email"
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Age"
          type="number"
        />
        {errors.age && <p className={styles.error}>{errors.age}</p>}

        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className={`${styles.formInput} ${styles.dropDown}`}
        >
          <option value="pref">Preferred Language</option>
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
        </select>
        {errors.language && <p className={styles.error}>{errors.language}</p>}

        <button type="submit">Proceed</button>
      </form>
    </aside>
  );
};

const getImageOfPlan = (plan) => {
  switch (plan.category) {
    case "Family":
      return FamilyImage;
    case "Senior Citizen":
      return SeniorImage;
    case "Individual":
      return IndividualImage;
  }
};

export default PlanEnquiryModal;
