import "./NavbarMobile.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import Links from "../Links/Links";
import Togglenav from "../Togglenav/Togglenav";

const NavbarMobile = () => {

  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    open: {
      clipPath: "circle(160% at 100% -10%)",
      transition: {
        type: "spring",
        stiffness: 30,
        restDelta: 2,
      },
    },
    close: {
      clipPath: "circle(0% at 100% -10%)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 100,
        damping: 30,
      },
    },
  };

  return (
    <motion.div className="navbarMobile" animate={isOpen ? "open" : "close"}>
      <motion.div className="bg" variants={circleVariants}>
        <Links setIsOpen={setIsOpen} />
      </motion.div>

      <Togglenav setIsOpen={setIsOpen} />
    </motion.div>
  );
};

export default NavbarMobile;