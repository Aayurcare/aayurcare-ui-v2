import styles from "./Signin.module.css";
import Logo from "../../../assets/icons/logo_light_bg.svg";
import ButtonPrimary from "../../../component/elements/button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../../api/authAPI";
const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    contactNumber: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    setError("");
    try {
      const response = await loginUser(formData);
      //TODO Save state
      navigate("/profile/plan-details");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
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
        <ButtonPrimary
          className={styles.button}
          content={"Login"}
          onClick={login}
        >
          Login
        </ButtonPrimary>
        {error.length > 0 && error}
        <br></br>
        <p>
          Don't have an account ? <p className="text-blue">Sign Up</p>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
