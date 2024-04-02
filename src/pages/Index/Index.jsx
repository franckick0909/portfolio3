// import About from "../../components/About/About";
// import Experience from "../../components/Experience/Experience";
import Header from "../../components/Header/Header";
// import Hero from "../../components/Hero/Hero";
// import Portfolio from "../../components/Portfolio/Portfolio";
// import Skills from "../../components/Skills/Skills";
// import Contact from "../../components/Contact/Contact";
// import Footer from "../../components/Footer/Footer";
import "./Index.scss";

const Index = () => {
  return (
    <div className="index">
      <Header />

      <section id="Hero" className="Hero">
        {/* <Hero /> */}
      </section>
      <section id="About" className="About">
        {/* <About /> */}
      </section>
      <section id="Skills" className="Skills">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* <Skills /> */}
      </section>
      <section id="Portfolio" className="Portfolio">
        {/* <Portfolio /> */}
      </section>
      <section id="Experience" className="Experience">
        {/* <Experience /> */}
      </section>
      <section id="Contact" className="Contact">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* <Contact /> */}
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;