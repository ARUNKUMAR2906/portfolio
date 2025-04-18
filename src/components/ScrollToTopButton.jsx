import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l`}
      style={{ zIndex: 50 }}
      aria-label="Scroll to top"
    >
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/metro/26/long-arrow-up.png"
        alt="Scroll to top icon"
      />
    </motion.button>
  );
};

export default ScrollToTopButton;
