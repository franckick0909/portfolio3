import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import "./Footer.scss";
import { FaAt, FaPhoneFlip, FaGhost, FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Footer = () => {

      const { t } = useTranslation();
  
  return (
    <footer>
     <div className="content">
         <div className="content__logo">
          <Logo />
          <LanguageSelector className="lang" />
        </div>

        <div className="content__center">
          <Social />       
          
          <p>{t("footer")}<span>Franckick.</span></p>
          
        </div>

        <div className="content__location">
          <ul>
            <li>
              <span><FaGhost /></span>Franck Chapelon 
            </li>
            <li>
              <span>
               <FaLocationDot />
              </span>
              24300 Savignac-de-Nontron (24)
            </li>
            <li>
              <span>
                <FaAt />
              </span>
              <a href="mailto:franckick2@gmail.com">franckick2@gmail.com</a>
            </li>
            <li>
              <span>
                <FaPhoneFlip />
              </span>
              tel: 06 35 22 32 57
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
