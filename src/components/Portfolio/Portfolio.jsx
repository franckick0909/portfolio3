import "./Portfolio.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import sophie1 from "../../assets/img/projects/sophie bluel/sophie bluel1.webp";
import kasa1 from "../../assets/img/projects/kasa/kasa1.webp";
import food1 from "../../assets/img/projects/ohmyfood/ohmyfood1.webp";
import folio1 from "../../assets/img/projects/portfolio/portfolio1.webp";
import cv1 from "../../assets/img/projects/cv/CV.webp";
import moviedb7 from "../../assets/img/projects/moviedb/moviedb7.webp";

const Portfolio = () => {
  const dataProjet = [
    {
      id: 1,
      name: "Sophie Bluel",
      image: sophie1,
      category: "cat2",
      link: "My-Portfolio/Projet1",
      github:
        "https://github.com/franckick0909/Portfolio-architecte-Sophie-Bluel",
      url: "https://franckick0909.github.io/Portfolio-architecte-Sophie-Bluel/",
    },
    {
      id: 2,
      name: "Kasa",
      image: kasa1,
      category: "cat3",
      link: "My-Portfolio/Projet2",
      github: "https://github.com/franckick0909/kasa-react",
      url: "https://franckick0909.github.io/kasa-react/",
    },
    {
      id: 3,
      name: "Ohmyfood",
      image: food1,
      category: "cat1",
      link: "My-Portfolio/Projet3",
      github: "https://github.com/franckick0909/OhMyFood",
      url: "https://franckick0909.github.io/OhMyFood/",
    },
    {
      id: 4,
      name: "MovieDB",
      image: moviedb7,
      category: "cat3",
      link: "My-Portfolio/Projet4",
      github: "https://github.com/franckick0909/NetPrime2",
      url: "https://franckick0909.github.io/NetPrime2",
    },
    {
      id: 5,
      name: "Portfolio",
      image: folio1,
      category: "cat2",
      link: "My-Portfolio/Projet5",
      github: "https://github.com/franckick0909/Portfolio2",
      url: "https://franckick0909.github.io/Portfolio2/",
    },
    {
      id: 6,
      name: "CV",
      image: cv1,
      category: "cat1",
      link: "My-Portfolio/Projet6",
      github: "https://github.com/franckick0909/CV",
      url: "https://franckick0909.github.io/CV/",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [activeButton, setActiveButton] = useState("all");
  const [Show, setShow] = useState(false);

  const filteredProjects = dataProjet.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  const handleButtonClick = (category) => {
    setFilter(category);
    setActiveButton(category);
  };

  useEffect(() => {
    setShow(true);
  }, []);

  const animVariants = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 20,
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const variants = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 20,
        duration: 1,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 20,
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
  const { h1, h2, p, p1, btn } = t("portfolio");

  return (
    <motion.div className="container" >
      <motion.h1 variants={variant} initial="hidden" whileInView="visible">
        {h1}
      </motion.h1>
      <motion.div
        className="text"
        variants={animVariants}
        initial="initial"
        whileInView="animate">
        <motion.h2 variants={animVariants}>{h2}</motion.h2>
        <motion.p className="subtitle" variants={animVariants}>
          {p}
          <span>{p1}</span>
        </motion.p>
      </motion.div>

      <motion.div className="projetCard">
        <motion.nav
          className="projetCard__nav"
          variants={textVariants}
          initial="initial"
          whileInView="animate">
          <motion.button
            className="btn-projetCard"
            style={
              activeButton === "all"
                ? { backgroundColor: "#A06929", color: "#ffffff" }
                : {}
            }
            onClick={() => handleButtonClick("all")}
            variants={textVariants}>
            All
          </motion.button>
          <motion.button
            className="btn-projetCard"
            style={
              activeButton === "cat1"
                ? { backgroundColor: "#A06929F", color: "#ffffff" }
                : {}
            }
            onClick={() => handleButtonClick("cat1")}
            variants={textVariants}>
            HTML / CSS
          </motion.button>
          <motion.button
            className="btn-projetCard"
            style={
              activeButton === "cat2"
                ? { backgroundColor: "#A06929", color: "#ffffff" }
                : {}
            }
            onClick={() => handleButtonClick("cat2")}
            variants={textVariants}>
            JavaScript
          </motion.button>
          <motion.button
            className="btn-projetCard"
            style={
              activeButton === "cat3"
                ? { backgroundColor: "#A06929", color: "#ffffff" }
                : {}
            }
            onClick={() => handleButtonClick("cat3")}
            variants={textVariants}>
            React
          </motion.button>
        </motion.nav>

        <motion.div
          className="projetCard__container"
          variants={variants}
          initial="initial"
          whileInView="animate">
          <motion.div className="card" variants={variants}>
            {filteredProjects.map((item, id) => (
              <motion.div
                className={`card__item ${Show ? "show" : "noshow"}`}
                key={id}
                variants={variants}>
                <motion.img
                  src={item.image}
                  alt="Captures d'écrans de mes projets"
                />
                <motion.div className="card__item__content">
                  <h3>{item.name}</h3>
                  <div className="overlay">
                    <div className="overlay__content">
                      <h2 className="projetName">{item.name}</h2>
                      <Link to={item.link} className="projetLink btn btn-3">
                        {btn} <FaRocket />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
