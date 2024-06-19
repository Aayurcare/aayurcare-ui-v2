import styles from "./Signin.module.css";
import Logo from "../../../assets/icons/logo_light_bg.svg";
import ButtonPrimary from "../../../component/elements/button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import ReactLoading from "react-loading";
import OTPInput from "react-otp-input";
import { requestOTP, verifyOTP } from "../../../api/authAPI";

const CONTACT_INPUT = "contact_number_form";
const OTP_INPUT = "otp_verify_form";
const DETAILS_INTPUT = "details_input";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(CONTACT_INPUT);

  const navigate = useNavigate();
  const signIn = useSignIn();
  const [requestId, setRequestId] = useState();

  const [error, setError] = useState("");

  const frameNavigate = (targetScreen, requestId) => {
    setCurrentStep(targetScreen);
    if (requestId) {
      setRequestId(requestId);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt="logo" />

      <div className={`${styles.formCard} glass-bg`}>
        <p className={styles.cardTitle}>Sign Up</p>

        {currentStep === CONTACT_INPUT && (
          <ContactNumberForm
            setError={setError}
            frameNavigate={frameNavigate}
          />
        )}

        {currentStep === OTP_INPUT && (
          <OTPInputForm
            setError={setError}
            frameNavigate={frameNavigate}
            requestId={requestId}
          />
        )}

        {currentStep === DETAILS_INTPUT && (
          <OTPInputForm setError={setError} frameNavigate={frameNavigate} />
        )}
        {error.length > 0 && <p className={styles.errorMessage}>{error}</p>}
      </div>
      {error}
    </div>
  );
};

const ContactNumberForm = ({ setError, error, frameNavigate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitOTPRequest = async () => {
    setError("");
    if (formData.contactNumber.length != 10) {
      setError("Invalid contact number");
    }

    try {
      setIsLoading(true);
      const response = await requestOTP(formData);
      console.log(response);
      setIsLoading(false);
      console.log(response.data.generatedOTP);
      frameNavigate(OTP_INPUT, response.data._id);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <p className={styles.textPrimary}>Let's get started</p>
      <input
        name="contactNumber"
        type="number"
        placeholder="Mobile Number"
        value={formData.contactNumber}
        onChange={handleChange}
        className={styles.formInput}
        style={{ marginTop: 20, marginBottom: 0 }}
        ref={inputRef}
      />
      <br></br>
      <label
        style={{
          alignContent: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input style={{ marginBottom: "0" }} type="checkbox" />I agree to the
        terms and conditions
      </label>
      {!isLoading ? (
        <ButtonPrimary
          className={styles.button}
          content={"Request OTP"}
          onClick={submitOTPRequest}
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

const OTPInputForm = ({ setError, error, frameNavigate, requestId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");

  if (!requestId) {
    frameNavigate(CONTACT_INPUT);
  }

  const [resendTimeOut, setResendTimeOut] = useState(31);

  const timerRef = useRef(null);
  console.log(`requestinf with ${requestId}`);
  const submitOTPRequest = async () => {
    setError("");
    try {
      setIsLoading(true);
      const response = await verifyOTP({
        requestId,
        otp,
      });
      console.log(response);
      setIsLoading(false);
      // frameNavigate(DETAILS_INPUT);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(`error ${error}`);
    }
  };

  // Cleanup effect to clear the interval on component unmount
  useEffect(() => {
    return () => {
      console.log("unmount");
      clearInterval(timerRef.current);
    };
  }, []);

  // Effect to handle the timer logic
  useEffect(() => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setResendTimeOut((prevTimeOut) => {
          if (prevTimeOut <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            return 0;
          }
          return prevTimeOut - 1;
        });
      }, 1000);
    }
  }, [resendTimeOut]);

  return (
    <div className={styles.otpInputContainer}>
      <p>Enter the OTP sent your mobile number</p>
      <br></br>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
        inputStyle={styles.otpInput}
        renderInput={(props) => (
          <input className={styles.otpInput} {...props} />
        )}
      />
      <p style={{ fontSize: "small" }}>
        You can resend your OTP in {resendTimeOut}
      </p>
      {!isLoading ? (
        <ButtonPrimary
          className={styles.button}
          content={"Verify"}
          onClick={submitOTPRequest}
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

export default SignUp;
