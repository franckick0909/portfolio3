import "./Links.scss";
import { useState, useEffect } from "react";
import links from "../../data/data.json";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";

const Links = ({ setIsOpen }) => {

      const [bg, setBg] = useState(false);

      useEffect(() => {
        window.addEventListener("scroll", () => {
          return window.scrollY > 60 ? setBg(true) : setBg(false);
        });
      });

    const variants = {
      open: {
        transition: { staggerChildren: 0.14, delayChildren: 0.2 },
      },
      close: {
        transition: { staggerChildren: 0.1, staggerDirection: -1 },
      },
    };

    const navigationVariants = {
      open: {
        y: 0,
        opacity: 1,
      },
      close: {
        y: 50,
        opacity: 0,
      },
    };

    return (
      <motion.div className="links" variants={variants}>
        {links.map((link, index) => (
          <motion.a
            onClick={() => setIsOpen(false)}
            href={link.link}
            key={index}
            className={bg ? "link active" : "link"}
            variants={navigationVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            spy={true}>
            {link.name }
          </motion.a>
        ))}
      </motion.div>
    );
};

Links.propTypes = {
  setIsOpen: PropTypes.func,
};

export default Links;