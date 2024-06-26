import styles from "./HomeHeader.module.css";
import UserIcon from "../assets/icons/svgjs/UserIcon";
import Logo from "../assets/icons/logo_light_bg.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import LogoSM from "../assets/icons/logo_sm.svg";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import useIsMobile from "../hooks/useIsMobile";
import { useState } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

const CustomBurgerIcon = () => <img src={HamburgerIcon} />;

const HomeHeader = ({ highlighted }) => {
  const isMobile = useIsMobile(); // Use the custom hook to determine mobile status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = useIsAuthenticated();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <img
        src={isMobile ? LogoSM : Logo}
        className={styles.logo}
        alt="Logo"
        onClick={() => {
          navigate("/");
        }}
      />

      {isMobile && <MobileMenuView highlighted={highlighted} />}

      <section className={styles.middleSection}>
        <Link
          to="/"
          className={styles.sectionItem}
          style={{
            color: highlighted === 0 ? "#114DD2" : "black",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/plans"
          className={styles.sectionItem}
          style={{
            color: highlighted === 1 ? "#114DD2" : "black",
            textDecoration: "none",
          }}
        >
          Plans
        </Link>
        <Link
          to="/services"
          className={styles.sectionItem}
          style={{
            color: highlighted === 2 ? "#114DD2" : "black",
            textDecoration: "none",
          }}
        >
          Services
        </Link>
        <Link
          to="/about-us"
          className={styles.sectionItem}
          style={{
            color: highlighted === 3 ? "#114DD2" : "black",
            textDecoration: "none",
          }}
        >
          About Us
        </Link>
      </section>
      {!isMobile && (
        <span
          style={{ zIndex: 10 }}
          onClick={handleUserIconClick}
          className={styles.userIcon}
        >
          <UserIcon className={styles.userIcon} />
        </span>
      )}
    </header>
  );

  function handleUserIconClick() {
    console.log(`is ${isAuthenticated}`);
    if (isAuthenticated) {
      navigate("/profile/plan-details");
    } else {
      navigate("/sign-in");
    }
  }
};

const MobileMenuView = ({ highlighted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.hamburgerIcon}>
      <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
      {isMenuOpen && (
        <div className={styles.sideMenu}>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="grid gap-2">
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 1 / 10,
                    }}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <Link
                      to="/"
                      style={{
                        color: highlighted === 0 ? "#114DD2" : "black",
                        textDecoration: "none",
                      }}
                      className={styles.sideMenuItem}
                    >
                      Home
                    </Link>
                  </motion.li>
                </ul>
                <ul className="grid gap-2">
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 2 / 10,
                    }}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <Link
                      to="/services"
                      style={{
                        color: highlighted === 0 ? "#114DD2" : "black",
                        textDecoration: "none",
                      }}
                      className={styles.sideMenuItem}
                    >
                      Services
                    </Link>
                  </motion.li>
                </ul>
                <ul className="grid gap-2">
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 3 / 10,
                    }}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <Link
                      to="/plans"
                      style={{
                        color: highlighted === 0 ? "#114DD2" : "black",
                        textDecoration: "none",
                      }}
                      className={styles.sideMenuItem}
                    >
                      Plans
                    </Link>
                  </motion.li>
                </ul>
                <ul className="grid gap-2">
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 3 / 10,
                    }}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <Link
                      to="/about-us"
                      style={{
                        color: highlighted === 0 ? "#114DD2" : "black",
                        textDecoration: "none",
                      }}
                      className={styles.sideMenuItem}
                    >
                      About Us
                    </Link>
                  </motion.li>
                </ul>
                <hr
                  style={{
                    width: "75%",
                    color: "#cccccc",
                    borderColor: "white",
                  }}
                ></hr>
                <ul className="grid gap-2">
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 3 / 10,
                    }}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <Link
                      to="/sign-in"
                      style={{
                        color: highlighted === 0 ? "#114DD2" : "black",
                        textDecoration: "none",
                      }}
                      className={styles.sideMenuItem}
                    >
                      Sign In/Sign Up
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default HomeHeader;
