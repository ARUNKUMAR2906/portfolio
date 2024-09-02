import { motion } from "framer-motion";

const ScrollToTopButton = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-gray-100 text-white shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:bg-gradient-to-r from-violet-500 to-purple-500`}
      style={{ zIndex: 50 }}
    >
      <img width="20" height="20" src="https://img.icons8.com/metro/26/long-arrow-up.png" alt="long-arrow-up"/>
    </motion.button>
  );
};

export default ScrollToTopButton;
