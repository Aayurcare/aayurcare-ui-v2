import { useNavigate } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import styles from "./ProfileContainer.module.css";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";

import DemoProfile from "../../assets/images/user.png";

const ProfileContainer = ({ children }) => {
  const auth = useAuthUser();
  const signOut = useSignOut();
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
              <td className={styles.profileTableValue}>{auth.dob}</td>
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
            <button onClick={() => signOut()}> Logout </button>
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

export default ProfileContainer;
