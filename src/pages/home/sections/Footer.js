import styles from "./Footer.module.css";

import Logo from "../../../assets/icons/logo_dark_bg.svg";
import EmailIcon from "../../../assets/icons/email_icon.svg";
import LocationIcon from "../../../assets/icons/location_icon.svg";

import FacebookIcon from "../../../assets/icons/facebook.svg";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import LinkedinIcon from "../../../assets/icons/linkedin.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topSection}>
        <section className={styles.footerDivision} style={{ flexGrow: "100" }}>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <p>
            AAYUR CARE can offer a diverse range of <br></br>facilities to both
            customers and <br></br>communities, contributing to improved
            <br></br> healthcare management,awareness, and<br></br> engagement.
          </p>
        </section>
        <section className={styles.footerDivision} style={{ flexGrow: "40" }}>
          <h3>Contact</h3>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={EmailIcon}
              style={{ marginRight: "8px", width: "35px" }}
            />
            <p>
              info@aayurcare.com<br></br>customercare@aayurcare.com
            </p>
          </span>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={LocationIcon}
              style={{ marginRight: "16px", width: "25px" }}
            />
            <p>
              Aayur Care Insta Office<br></br>
              Koramangala, 1st floor, <br></br>
              SPD Plaza, Industrial Layout, <br></br>
              5th Block, Bengaluru,<br></br>
              Karnataka, India 560034
            </p>
          </span>
        </section>
        <section className={styles.footerDivision} style={{ flexGrow: "40" }}>
          <h3>Social Media</h3>
          Follow us on our social<br></br> media accounts for the<br></br>
          latest updates:
          <span>
            <img src={FacebookIcon} className={styles.socialMediaIcon} />
            <img src={TwitterIcon} className={styles.socialMediaIcon} />
            <img src={LinkedinIcon} className={styles.socialMediaIcon} />
            <img src={InstagramIcon} className={styles.socialMediaIcon} />
          </span>
        </section>
      </div>
      <hr></hr>
      <section className={styles.bottomSection}>
        <p className={styles.copyright}>
          Copyright © 2024. Aayurcare. All rights reserved.
        </p>
        <p className={styles.privacy}>Privacy Policy</p>
        <p className={styles.termsOfUse}>Terms of Use</p>
      </section>
    </footer>
  );
};

export default Footer;
