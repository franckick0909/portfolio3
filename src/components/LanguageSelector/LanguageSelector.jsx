import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";
import { useEffect } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "Français" },
  { code: "es", lang: "Español" },
];

const LanguageSelector = () => {
  const [openLang, setOpenLang] = useState(false);
  const [arrow, setArrow] = useState(false);

  const handleOpenLang = () => {
    setOpenLang(!openLang);
    setArrow(!arrow);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <motion.div
      className="btn-container"
      initial={{ y: -100, opacity: 0 }}
      transition={{ stiffness: 100 }}
      animate={{ y: 0, opacity: 1 }}>
      <div className="drop-globe">
        <FaGlobe className="globe" />

        <div className="drop-content" onClick={handleOpenLang}>
          <p className="lang">Langues</p>

          <div className="drop-icon">
            <FaChevronDown
              className={`chevron ${arrow ? "arrowTop" : ""}`}
              onClick={handleOpenLang}
            />
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {openLang && (
          <motion.ul
            className={`lang-container ${openLang ? "open" : ""}`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 36 }}
            exit={{ opacity: 0, y: -10, scaleY: 0 }}>
            {languages.map((lng) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={lng.code}
                className={`drop-element ${
                  lng.code === i18n.language ? "selected" : ""
                }`}
                onClick={() => changeLanguage(lng.code)}>
                {lng.lang}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSelector;
