import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollProgress from "./components/ScrollProgress";

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#121212] text-white scroll-smooth">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <ScrollProgress />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Hero id="hero" />
        </motion.div>

        <motion.div
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <About />
        </motion.div>

        <motion.div
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Skills />
        </motion.div>

        <motion.div
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Projects />
        </motion.div>

        <motion.div
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Contact />
        </motion.div>

        <motion.div
          id="footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Footer />
        </motion.div>
      </div>

      <ScrollToTopButton isVisible={isButtonVisible} />
    </div>
  );
}

export default App;
