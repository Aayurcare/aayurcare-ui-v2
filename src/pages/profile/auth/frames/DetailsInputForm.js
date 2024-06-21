import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import styles from "../Signin.module.css";
import ButtonPrimary from "../../../../component/elements/button/ButtonPrimary";
import { signUpUser } from "../../../../api/authAPI";

const DetailsInputForm = ({
  setError,
  frameNavigate,
  _otpRequestId,
  _contactNumber,
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    contactNumber: _contactNumber,
    otpRequestId: _otpRequestId,
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    //Set contact number and otp request id to the json to be sent
    setFormData({
      ...formData,
      otpRequestId: _otpRequestId,
      contactNumber: _contactNumber,
    });
    console.log(formData);
  }, []);

  const submitDetails = async () => {
    setError("");

    console.log(formData);
    setIsLoading(true);
    try {
      const response = await signUpUser(formData);
      console.log(response.data);
      navigate("/sign-in");
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.detailsInputContainer}>
      <p>Tell us more about yourself</p>
      <input
        name="contactNumber"
        type="number"
        placeholder="Mobile Number"
        value={formData.contactNumber}
        className={styles.formInput}
        style={{ marginTop: 20, marginBottom: 0 }}
        onChange={handleChange}
        disabled
      />
      <span className={styles.nameInputs}>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          className={`${styles.formInput} ${styles.firstNameInput}`}
          style={{ marginTop: 20, marginBottom: 0 }}
          onChange={handleChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          className={`${styles.formInput} ${styles.lastNameInput}`}
          style={{ marginTop: 20, marginBottom: 0 }}
          onChange={handleChange}
        />
      </span>

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        className={styles.formInput}
        style={{ marginTop: 20, marginBottom: 0 }}
        onChange={handleChange}
      />
      <span>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          className={styles.formInput}
          style={{ marginTop: 20, marginBottom: 0 }}
          onChange={handleChange}
        />
      </span>

      <label className={styles.datePickerContainer}>
        <p style={{ alignSelf: "center" }}>Date of Birth</p>
        <DatePicker
          name="dob"
          onChange={(date) => {
            setFormData({
              ...formData,
              dob: date,
            });
            console.log(formData);
          }}
          className={styles.datePicker}
          selected={formData.dob}
        />
      </label>
      {!isLoading ? (
        <ButtonPrimary
          className={styles.button}
          content={"Complete Sign Up"}
          onClick={submitDetails}
        >
          Request OTP
        </ButtonPrimary>
      ) : (
        <ReactLoading
          type="bubbles"
          color="#114DD2"
          className={styles.spinner}
        />
      )}
    </div>
  );
};

export default DetailsInputForm;
