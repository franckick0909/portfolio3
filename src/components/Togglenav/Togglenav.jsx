import "./Togglenav.scss";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Togglenav = ({ setIsOpen }) => {
  return (
    <button className="toggle" onClick={() => setIsOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23" className="svg">
        <motion.path
          className="line"
          fill="none"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            close: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5 " },
          }}
        />
        <motion.path
          className="line"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            close: { d: "M 2 9.423 L 20 9.423" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
        <motion.path
          className="line"
          fill="none"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            close: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

Togglenav.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Togglenav;
