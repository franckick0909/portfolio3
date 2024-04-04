import Logo from "../Logo/Logo";
import "./Header.scss";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { easeIn, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Header = () => {
  const { t} = useTranslation();

    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 68) {
                setBg(true);
            } else {
                setBg(false);
            }
        });
    });

    return (
      <header className={bg ? "header active" : "header"}>
        <Logo />
        <Navbar />
        <LanguageSelector />
        <motion.a
          href="#Contact"
          className="btn btn-1 linkContact"
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, ease: easeIn }}
          animate={{ y: 0, opacity: 1 }}>
          {t("btn_menu_contact")}
        </motion.a>
        <NavbarMobile />
      </header>
    );
};

export default Header;