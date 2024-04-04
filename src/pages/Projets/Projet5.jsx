import "./Projet.scss";
import img1 from "../../assets/img/projects/portfolio/portfolio1.webp";
import img2 from "../../assets/img/projects/portfolio/portfolio2.webp";
import img3 from "../../assets/img/projects/portfolio/portfolio3.webp";
import img4 from "../../assets/img/projects/portfolio/portfolio4.webp";


import icon1 from "../../assets/icons/html5.png";
import icon2 from "../../assets/icons/css3.png";
import icon3 from "../../assets/icons/sass.png";
import icon4 from "../../assets/icons/js.png";
import icon5 from "../../assets/icons/reactjs.png";
import icon6 from "../../assets/icons/figma.png";
import icon7 from "../../assets/icons/git.png";
import icon8 from "../../assets/icons/nextjs.png";
import icon9 from "../../assets/icons/nodejs.png";

import Footer from "../../components/Footer/Footer";
import {
  FaCalendarCheck,
  FaArrowLeft,
  FaLink,
  FaGithub,
  FaPlus,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import dataProjet from "../../data/dataProjets.json";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import { AnimatePresence } from "framer-motion";

const Projet5 = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    console.log(selectedImage);
    const openModal = (imageSrc) => {
      setIsOpen(true);
      setSelectedImage(imageSrc);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

            const { t } = useTranslation();
            const {
              h1,
              span,
              btnretour,
              date,
              title1,
              title2,
              title3,
              title4,
              p1,
              p2,
              p3,
              p4,
              li1,
              li2,
              btn2,
            } = t("projet5");

  const dataImage = [img1, img2, img3, img4];

  const dataIcons = [
    {
      icon: icon1,
      title: "HTML5",
      href: "https://www.w3schools.com/html/",
      category: "Front-end",
    },
    {
      icon: icon2,
      title: "CSS3",
      href: "https://www.w3schools.com/css/",
      category: "Front-end",
    },
    {
      icon: icon3,
      title: "SASS",
      href: "https://sass-lang.com/",
      category: "Front-end",
    },
    {
      icon: icon4,
      title: "Javascript",
      href: "https://www.w3schools.com/js/",
      category: "Javascript",
    },
    {
      icon: icon5,
      title: "ReactJS",
      href: "https://fr.reactjs.org/",
      category: "React",
    },
    {
      icon: icon6,
      title: "Figma",
      href: "https://www.figma.com/",
      category: "Design",
    },
    {
      icon: icon7,
      title: "Git",
      href: "https://git-scm.com/",
      category: "Front-end",
    },
    {
      icon: icon8,
      title: "NextJS",
      href: "https://nextjs.org/",
      category: "NextJS",
    },
    {
      icon: icon9,
      title: "NodeJS",
      href: "https://nodejs.org/en/",
      category: "Back-end",
    },
  ];

        const yVariants = {
          initial: {
            opacity: 0,
            y: 100,
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              stiffness: 100,
              type: "spring",
              damping: 30,
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        };

        const xVariantsLeft = {
          initial: {
            opacity: 0,
            x: -100,
          },
          animate: {
            opacity: 1,
            x: 0,
            transition: {
              stiffness: 100,
              type: "spring",
              damping: 22,
              staggerChildren: 0.14,
              delayChildren: 0.1,
            },
          },
        };

        const xVariantsRight = {
          initial: {
            opacity: 0,
            x: 100,
          },
          animate: {
            opacity: 1,
            x: 0,
            transition: {
              stiffness: 100,
              type: "spring",
              damping: 22,
              staggerChildren: 0.14,
              delayChildren: 0.1,
            },
          },
        };
  const [activeLink, setActiveLink] = useState(null);

  return (
    <section id="Projet5" className="Projet">
      <motion.div
        className="title"
        variants={yVariants}
        initial="initial"
        animate="animate">
        <motion.h1 variants={yVariants}>
          {h1} <span>{span}</span>
        </motion.h1>
      </motion.div>
      <hr />

      <motion.div className="container">
        <motion.div
          className="image"
          initial="initial"
          animate="animate"
          variants={xVariantsLeft}>
          <motion.div className="bouton" variants={xVariantsLeft}>
            <Link to="/" className="btn btn-1 btn-retour">
              <span>
                <FaArrowLeft />
              </span>
              {btnretour}
            </Link>
            <LanguageSelector />
          </motion.div>

          <motion.div className="image__content" variants={xVariantsLeft}>
            {dataImage.map((item, index) => (
              <motion.div
                key={index}
                variants={xVariantsLeft}
                className="image__content__relative">
                <img
                  src={item}
                  alt="screen MovieDB"
                  onClick={() => openModal(item)}
                />
                <motion.div className="overay">
                  <motion.div className="overlay__content">
                    <motion.button onClick={openModal} className="openModal">
                      <FaPlus className="plus" />
                    </motion.button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          className="modal"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}>
                          <div className="modal-content">
                            <img src={item} alt="screen portfolio #2" />

                            <button onClick={closeModal} className="btn btn-1">
                              close
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="boutons" variants={xVariantsLeft}>
            {dataProjet.map((item, index) => {
              return (
                <NavLink
                  to={item.link}
                  key={index}
                  className={`btn btn-2 btn-suivant ${
                    activeLink === item.id ? "active" : ""
                  }`}
                  onClick={() => setActiveLink(item.id)}>
                  {item.id}
                </NavLink>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="texte"
          initial="initial"
          animate="animate"
          variants={xVariantsRight}>
          <motion.div className="texte__content" variants={xVariantsRight}>
            <p className="icon">
              <span>
                <FaCalendarCheck />
              </span>
              {date} : 2023
            </p>

            <motion.h3 variants={xVariantsRight}>{title1}</motion.h3>
            <p>{p1}</p>

            <h3>{title2}</h3>

            <motion.ul className="objectifs" variants={xVariantsRight}>
              <li>
                <p>{p2}</p>
              </li>
              <li>
                <p>{p3}</p>
              </li>
              <li>
                <p>{p4}</p>
              </li>
            </motion.ul>

            <motion.h3 variants={xVariantsRight}>{title3}</motion.h3>

            <motion.ul className="infos" variants={xVariantsRight}>
              <li>
                <p>
                  <span>&#10003; </span> {li1}
                </p>
              </li>
              <li>
                <p>
                  <span>&#10003; </span> {li2}
                </p>
              </li>
            </motion.ul>

            <hr />

            <motion.h3 variants={xVariantsRight}>{title4}</motion.h3>

            <motion.ul className="technologies" variants={xVariantsRight}>
              {dataIcons
                .filter(
                  (item) =>
                    item.category === "Front-end" ||
                    item.category === "Design" ||
                    item.category === "Back-end" ||
                    item.category === "Javascript"
                )
                .map((item, index) => {
                  return (
                    <motion.li key={index} variants={xVariantsRight}>
                      <motion.img
                        src={item.icon}
                        alt={item.title}
                        variants={xVariantsRight}
                      />
                    </motion.li>
                  );
                })}
            </motion.ul>

            <hr />

            <motion.div className="boutons" variants={xVariantsRight}>
              {dataProjet
                .filter((item) => item.id === 5)
                .map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="boutons"
                      variants={xVariantsRight}>
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-1 btn-code">
                        Github
                        <span>
                          <FaGithub />
                        </span>
                      </a>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-2 btn-projet">
                        {btn2}
                        <span>
                          <FaLink />
                        </span>
                      </a>
                    </motion.div>
                  );
                })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </section>
  );
};

export default Projet5;
