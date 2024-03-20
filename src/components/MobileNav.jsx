import "../styles/components/_MobileNav.scss";
import PropTypes from "prop-types";

const MobileNav = ({ isOpen }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-container">
          <img className="logo" src="/src/assets/images/react.svg" alt="logo" />
          <ul>
            <li>
              <a href="#" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileNav;
