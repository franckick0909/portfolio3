import "./Skills.scss";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import icon1 from "../../assets/icons/html5.png";
import icon2 from "../../assets/icons/css3.png";
import icon3 from "../../assets/icons/sass.png";
import icon4 from "../../assets/icons/js.png";
import icon5 from "../../assets/icons/reactjs.png";
import icon6 from "../../assets/icons/figma.png";
import icon7 from "../../assets/icons/git.png";
import icon8 from "../../assets/icons/nextjs.png";
import icon9 from "../../assets/icons/nodejs.png";

const Skills = () => {
  const dataIcons = [
    {
      icon: icon1,
      title: "HTML5",
      href: "https://www.w3schools.com/html/",
    },
    {
      icon: icon2,
      title: "CSS3",
      href: "https://www.w3schools.com/css/",
    },
    {
      icon: icon3,
      title: "SASS",
      href: "https://sass-lang.com/",
    },
    {
      icon: icon4,
      title: "Javascript",
      href: "https://www.w3schools.com/js/",
    },
    {
      icon: icon5,
      title: "ReactJS",
      href: "https://fr.reactjs.org/",
    },
    {
      icon: icon6,
      title: "Figma",
      href: "https://www.figma.com/",
    },
    {
      icon: icon7,
      title: "Git",
      href: "https://git-scm.com/",
    },
    {
      icon: icon8,
      title: "NextJS",
      href: "https://nextjs.org/",
    },
    {
      icon: icon9,
      title: "NodeJS",
      href: "https://nodejs.org/en/",
    },
  ];

  const headingVariants = {
    initial: {
      opacity: 0.7,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 50,
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  const imgVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 20,
        staggerChildren: 0.1,
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
  const { h1, h2, h3 } = t("skills");

  return (
    <motion.div
      className="container"
      variants={imgVariants}
      initial="hidden"
      whileInView="visible">
      <motion.h1 variants={variants} initial="hidden" whileInView="visible">
        {h1}
      </motion.h1>
      <motion.h2 className="title" variants={imgVariants}>
        {h2}
      </motion.h2>
      <motion.h3 className="subtitle" variants={imgVariants}>
        {h3}
      </motion.h3>

      <motion.div
        className="content"
        variants={headingVariants}
        initial="initial"
        animate="animate">
        <motion.div
          className="content-skills"
          variants={imgVariants}
          initial="hidden"
          whileInView="visible">
          {dataIcons.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="content__item"
                variants={imgVariants}>
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  whileHover={{ scale: 1.3 }}
                />
                <motion.a
                  href={item.href}
                  className="url"
                  target="_blank"
                  rel="noopener noreferrer">
                  {item.title}
                  <span>
                    <FaLink />
                  </span>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
