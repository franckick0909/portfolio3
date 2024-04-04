import "./Experience.scss";
import icon1 from "../../assets/icons/mortier.png";
import icon2 from "../../assets/icons/pinceau.png";
import icon3 from "../../assets/icons/OpenClassrooms.png";
import icon4 from "../../assets/icons/cropped-logo.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Experience = () => {

  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

    const variant = {
      hidden: {
        opacity: 0,
        scale: 0.2,
        y: -100,
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          damping: 10,
          stiffness: 100,
          type: "spring",
        },
      },
  };
  
      const { t } = useTranslation();

  return (
    <motion.div className="container">
      <motion.h1 variants={variant} initial="hidden" whileInView="visible">
        {t("experience")}
      </motion.h1>
      <motion.div
        className="timeline"
        variants={variants}
        initial="initial"
        whileInView="animate">
        <motion.div
          className="timeline__container left-container"
          variants={variants}>
          <img src={icon1} alt="" />
          <div className="text">
            <h2>BAC PRO Mécanique Auto</h2>
            <small>1994 - 1996</small>
            <p>Lycée Professionnel Gaspard Monge - Savigny/Orge (91)</p>
            <span className="left-container-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          className="timeline__container right-container"
          variants={variants}>
          <img src={icon2} alt="" />
          <div className="text">
            <h2>Taglio Application</h2>
            <small>2003 - 2010</small>
            <p>
              Traitement de surface et Thermo laquage - Technicien de contrôle
              qualité
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          className="timeline__container left-container"
          variants={variants}>
          <img src={icon3} alt="" />
          <div className="text">
            <h2>Formation OpenClassrooms</h2>
            <small>2023 - 2024</small>
            <p>
              Intégrateur Web - Développeur Front-End -{" "}
              <span>Reconversion professionnelle</span>
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          className="timeline__container right-container"
          variants={variants}>
          <img src={icon4} alt="" />
          <div className="text">
            <h2>Les Ateliers du goût</h2>
            <small>2010 - 2022</small>
            <p>Agroalimentaire - Magasinier Cariste</p>
            <span className="right-container-arrow"></span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
