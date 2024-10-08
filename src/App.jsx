import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import the button

function App() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    const aboutSectionTop = aboutSection?.offsetTop || 0;
    const scrollY = window.scrollY;

    if (scrollY >= aboutSectionTop - window.innerHeight / 2) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#222] scroll-smooth">
      <Hero id="hero" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer id="footer" />
      <ScrollToTopButton isVisible={isButtonVisible} />
    </div>
  );
}

export default App;
