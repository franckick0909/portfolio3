import "./Navbar.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import linkTop from "../../data/data.json";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  const { home, about, skills, portfolio, experience } = t("navbar");

  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 60 ? setBg(true) : setBg(false);
    });
  });

  const animVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 10,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="navbar"
      variants={animVariants}
      initial="initial"
      animate="animate">
      <motion.a
        href="#Hero"
        className={bg ? "linktop ok" : "linktop"}
        variants={animVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}>
        {home}
      </motion.a>
      <motion.a
        href="#About"
        className={bg ? "linktop ok" : "linktop"}
        variants={animVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}>
        {about}
      </motion.a>
      <motion.a
        href="#Skills"
        className={bg ? "linktop ok" : "linktop"}
        variants={animVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}>
        {skills}
      </motion.a>
      <motion.a
        href="#Portfolio"
        className={bg ? "linktop ok" : "linktop"}
        variants={animVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}>
        {portfolio}
      </motion.a>
      <motion.a
        href="#Experience"
        className={bg ? "linktop ok" : "linktop"}
        variants={animVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}>
        {experience}
      </motion.a>

      {/* {linkTop.map((link, idx) => (
          <motion.a
            href={link.link}
            key={idx}
            className={bg ? "linktop ok" : "linktop"}
            variants={animVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}>
            {link.name}
          </motion.a>
        ))} */}
    </motion.div>
  );
};

export default Navbar;
