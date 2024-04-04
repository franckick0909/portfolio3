import "./About.scss";
import hero from "../../assets/img/images/hero.webp";
import CV from "../../assets/pdf/CV Franck Chapelon.pdf";
import { motion } from "framer-motion";
import Social from "../Social/Social";
import { useTranslation } from "react-i18next";

const About = () => {
  const variantsLeft = {
    hidden: {
      opacity: 0,
      x: -300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 10,
        delay: 0.1,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  const variantsRight = {
    hidden: {
      opacity: 0,
      x: 300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 15,
        delay: 0.1,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  const variants = {
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
  const {
    h1,
    h2,
    h3,
    p1,
    p2,
    p3,
    span1,
    span2,
    span3,
    span4,
    span5,
    span6,
    span7,
    span8,
    span9,
    span10,
    span11,
    btn3,
    btn4,
  } = t("about");

  return (
    <motion.section id="About" className="About">
      <motion.div className="container">
        <motion.h1 variants={variants} initial="hidden" whileInView="visible">
          {h1}
        </motion.h1>
        <motion.div
          className="left"
          variants={variantsLeft}
          initial="hidden"
          whileInView="visible">
          <motion.div
            className="imgContainer"
            whileInView={{
              scale: [0.9, 0.5, 1, 0.9],
              rotate: [0, 0, 45, 0, -45, 0],
              borderRadius: [
                "10%",
                "20%",
                "50%",
                "50%",
                "100%",
                "50%",
                "30%",
                "10%",
              ],
            }}
            transition={{ duration: 10, repeatType: "mirror" }}>
            <motion.img
              src={hero}
              alt="hero"
              className="hero"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
          <motion.h2>
            {h2} <span className="name"> Franck</span>
          </motion.h2>

          <Social />
        </motion.div>
        <motion.div
          className="right"
          variants={variantsRight}
          initial="hidden"
          whileInView="visible">
          <motion.div className="wrapper">
            <motion.h3 variants={variantsRight}>{h3}</motion.h3>

            <motion.div className="description" variants={variantsRight}>
              <motion.p variants={variantsRight}>{p1}</motion.p>

              <motion.p variants={variantsRight}>{p2}</motion.p>
              <motion.p variants={variantsRight}>{p3}</motion.p>
            </motion.div>

            <motion.div className="information" variants={variantsRight}>
              <motion.table variants={variantsRight}>
                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b variants={variantsRight}>&#10003;</motion.b>
                    <motion.p>
                      <motion.span>{span1}</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> Franck
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>{span2}</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> Chapelon
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>{span3}</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> 48 {span8}
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>{span4}</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> {span9}
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>{span5}</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> {span10}
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>{span6}</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> Dordogne, France
                    </motion.p>
                  </motion.td>
                </motion.tr>

                <motion.tr variants={variantsRight}>
                  <motion.td variants={variantsRight}>
                    <motion.b>&#10003;</motion.b>
                    <motion.p variants={variantsRight}>
                      <motion.span>{span7}</motion.span>
                    </motion.p>
                  </motion.td>
                  <motion.td>
                    <motion.p>
                      <motion.span>:</motion.span> {span11}
                    </motion.p>
                  </motion.td>
                </motion.tr>
              </motion.table>
            </motion.div>
            <motion.div className="buttons" variants={variantsRight}>
              <motion.a href="#Contact" className="btn btn-1">
                {btn3}
              </motion.a>
              <motion.a href={CV} download className="btn btn-2">
                {btn4}
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
