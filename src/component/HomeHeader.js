import styles from "./HomeHeader.module.css";
import UserIcon from "../assets/icons/svgjs/UserIcon";
import Logo from "../assets/icons/logo_light_bg.svg";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";

import LogoSM from "../assets/icons/logo_sm.svg";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import useIsMobile from "../hooks/useIsMobile";
import { useState } from "react";

import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

const CustomBurgerIcon = () => <img src={HamburgerIcon} />;

const HomeHeader = ({ highlighted }) => {
  const isMobile = useIsMobile(); // Use the custom hook to determine mobile status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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

      {isMobile && (
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}

      <section className={styles.middleSection}>
        <Link
          to="/"
          style={{
            color: highlighted === 0 ? "#114DD2" : "black",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/plans"
          style={{
            color: highlighted === 1 ? "#114DD2" : "black",
            textDecoration: "none",
          }}
        >
          Plans
        </Link>
        <Link
          to="/services"
          style={{
            color: highlighted === 2 ? "#114DD2" : "black",
            textDecoration: "none",
          }}
        >
          Services
        </Link>
        <Link
          to="/about-us"
          style={{
            color: highlighted === 3 ? "#114DD2" : "black",
            textDecoration: "none",
          }}
        >
          About Us
        </Link>
      </section>
      {!isMobile && <p></p>}
      {/* Include UserIcon or other content here if needed */}
    </header>
  );
};

export default HomeHeader;
