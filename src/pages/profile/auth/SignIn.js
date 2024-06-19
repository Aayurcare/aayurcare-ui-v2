import styles from "./Signin.module.css";
import Logo from "../../../assets/icons/logo_light_bg.svg";
import ButtonPrimary from "../../../component/elements/button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../../api/authAPI";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import ReactLoading from "react-loading";

const SignIn = () => {
  const navigate = useNavigate();
  const signIn = useSignIn();

  const [formData, setFormData] = useState({
    contactNumber: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await loginUser(formData);
      if (
        signIn({
          auth: {
            token: response.token,
            type: "Bearer",
          },
          userState: response.data,
        })
      ) {
        navigate("/profile/plan-details");
      } else {
        //Throw error
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt="logo" />

      <div className={`${styles.formCard} glass-bg`}>
        <p className={styles.cardTitle}>Login</p>
        <input
          name="contactNumber"
          type="number"
          placeholder="Mobile Number"
          value={formData.contactNumber}
          onChange={handleChange}
          className={styles.formInput}
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className={styles.formInput}
        />
        <p className={styles.textSecondary}>Forgot Password ?</p>
        {!isLoading ? (
          <ButtonPrimary
            className={styles.button}
            content={"Login"}
            onClick={login}
          >
            Login
          </ButtonPrimary>
        ) : (
          <ReactLoading
            type="bubbles"
            color="#114DD2"
            className={styles.spinner}
          />
        )}
        {error.length > 0 && <p className={styles.errorMessage}>{error}</p>}
        <br></br>
        <p>
          Don't have an account ?{" "}
          <p
            className="text-blue clickable"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Sign Up
          </p>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
