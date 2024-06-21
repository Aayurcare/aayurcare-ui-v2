import { useNavigate } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import styles from "./ProfileContainer.module.css";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";

import DemoProfile from "../../assets/images/user.png";

const ProfileContainer = ({ children }) => {
  const auth = useAuthUser();

  const pages = {
    "plan-details": {
      title: "My Plan Details",
      route: "/profile/plan-details",
    },
    "claim-details": {
      title: "Claim Details",
      route: "/profile/claim-details",
    },
  };

  return (
    <HomeToolbarLayout>
      <div className={styles.container}>
        <div className={styles.leftPanelProfile}>
          <img
            src={auth.profileImageUrl ? auth.profileImageUrl : DemoProfile}
            alt="profile"
            className={styles.profileImage}
          />
          <p>
            {auth.firstName} {auth.lastName}
          </p>
          <table className={styles.profileTable}>
            <tr className={styles.profileTableRow}>
              <td className={styles.profileTableLabel}>DOB</td>
              <td className={styles.profileTableValue}>
                {auth.dob ? auth.dob.split("T")[0] : ""}
              </td>
            </tr>
            <tr className={styles.profileTableRow}>
              <td className={styles.profileTableLabel}>Contact </td>
              <td className={styles.profileTableValue}>{auth.contactNumber}</td>
            </tr>
            <tr className={styles.profileTableRow}>
              <td className={styles.profileTableLabel}>Email</td>
              <td className={styles.profileTableValue}>{auth.email}</td>
            </tr>
          </table>
        </div>
        <div className={styles.pageContainer}>
          <nav className={styles.chipContainer}>
            {/* <Chip pageInfo={pages["general-information"]} /> */}
            <Chip pageInfo={pages["plan-details"]} />
            <Chip pageInfo={pages["claim-details"]} />
            <p style={{ flexGrow: 1 }}></p>
            <LogoutButton />
          </nav>
          <div className={styles.childComponent}>{children}</div>
        </div>
      </div>
      <Footer></Footer>
    </HomeToolbarLayout>
  );
};

const Chip = ({ pageInfo, isSelected }) => {
  const navigate = useNavigate();
  const currentLocation =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  return (
    <span
      className={styles.titleChip}
      style={
        currentLocation == pageInfo.route.split("/")[2]
          ? { backgroundColor: "#114DD2", color: "white" }
          : {}
      }
      onClick={() => navigate(pageInfo.route)}
    >
      {pageInfo.title}
    </span>
  );
};

const LogoutButton = () => {
  const navigate = useNavigate();
  const signOut = useSignOut();
  return (
    <span
      className={styles.logoutButton}
      onClick={() => {
        signOut();
        navigate("/sign-in");
      }}
    >
      Logout{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-box-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
        />
        <path
          fill-rule="evenodd"
          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
        />
      </svg>
    </span>
  );
};

export default ProfileContainer;
