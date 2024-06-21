import styles from "./Signin.module.css";
import Logo from "../../../assets/icons/logo_light_bg.svg";
import ButtonPrimary from "../../../component/elements/button/ButtonPrimary";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser } from "../../../api/authAPI";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import ReactLoading from "react-loading";
import { Bounce, toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const searchParams = new URLSearchParams(window.location.search);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    contactNumber: "",
    password: "",
  });

  useEffect(() => {
    if (
      searchParams.get("type") === "signup" &&
      searchParams.get("status") === "success"
    ) {
      console.log("toasting");
      toast.success("Your account has been created.", {
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
    }
  }, []);

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
      <ToastContainer />
    </div>
  );
};

export default SignIn;
