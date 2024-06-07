import { useNavigate } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import HomeToolbarLayout from "../../layouts/home/HomeToolbarLayout";
import styles from "./ProfileContainer.module.css";

import DemoProfile from "../../assets/images/demo_profile.png";

const ProfileContainer = ({ children }) => {
  const pages = {
    // "general-information": {
    //   title: "General Information",
    //   route: "/profile/general-information",
    // },
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
            src={DemoProfile}
            alt="profile"
            className={styles.profileImage}
          />
          <p>Reyan</p>
          <table className={styles.profileTable}>
            <tr className={styles.profileTableRow}>
              <td className={styles.profileTableLabel}>DOB</td>
              <td className={styles.profileTableValue}>12/01/1995</td>
            </tr>
            <tr className={styles.profileTableRow}>
              <td className={styles.profileTableLabel}>Contact </td>
              <td className={styles.profileTableValue}>999888771</td>
            </tr>
            <tr className={styles.profileTableRow}>
              <td className={styles.profileTableLabel}>Email</td>
              <td className={styles.profileTableValue}>
                reyan.demouser@gmail.com
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.pageContainer}>
          <nav className={styles.chipContainer}>
            {/* <Chip pageInfo={pages["general-information"]} /> */}
            <Chip pageInfo={pages["plan-details"]} />
            <Chip pageInfo={pages["claim-details"]} />
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
  console.log(currentLocation);
  console.log(pageInfo.route.split("/")[2]);
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
