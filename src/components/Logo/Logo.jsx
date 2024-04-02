import "./Logo.scss";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <>
      <motion.div
        className="logo"
        initial={{ opacity: 0, scale: 0, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 13,
          delay: 0.1,
        }}>
        Fran<motion.span>Kick</motion.span>
      </motion.div>
    </>
  );
};

export default Logo;
