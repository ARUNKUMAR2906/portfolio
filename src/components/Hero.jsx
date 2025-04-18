import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroImg from "../assets/hero-img.jpg";
import twitterIcon from "../assets/twitter-dark.svg";
import githubIcon from "../assets/github-dark.svg";
import linkedinIcon from "../assets/linkedin-dark.svg";
import CV from "../assets/CV.pdf";

const Hero = ({ id }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-left p-6 gap-10 bg-gradient-to-br from-[#1f1c2c] to-[#928DAB] text-white"
    >
      {/* Profile Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          className="w-48 md:w-72 xl:w-80 rounded-full object-cover shadow-2xl border-4 border-white/20 transition-transform duration-500"
          src={heroImg}
          alt="profile"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="md:w-1/2 w-full max-w-xl backdrop-blur-lg bg-white/10 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center md:items-start gap-4 xl:gap-6 border border-white/20"
      >
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-xl">
          Arun Kumar
        </h1>

        <h2 className="text-lg md:text-xl xl:text-2xl font-mono">
          <span className="text-gray-200">I'm a </span>
          <span className="text-yellow-300">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Java Developer",
                "React Developer",
                "Web Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <div className="flex gap-1 mt-2">
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/arunkumar-babu-7983502ba/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full p-2 transition duration-300 hover:bg-[#0077B5]" // LinkedIn blue
          >
            <img
              className="w-8 md:w-10"
              src={linkedinIcon}
              alt="LinkedIn icon"
            />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/ARUNKUMAR2906"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full p-2 transition duration-300 hover:bg-[#333]" // GitHub dark
          >
            <img className="w-8 md:w-10" src={githubIcon} alt="GitHub icon" />
          </motion.a>

          {/* Twitter (X) */}
          <motion.a
            href="https://x.com/Arundev2901"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full p-2 transition duration-300 hover:bg-[#1DA1F2]" // Twitter blue
          >
            <img className="w-8 md:w-10" src={twitterIcon} alt="Twitter icon" />
          </motion.a>
        </div>

        <p className="text-gray-100 max-w-md font-mono text-sm md:text-base xl:text-lg">
          Passionate full-stack developer with expertise in Java, JavaScript,
          React, and modern web technologies.
        </p>

        <a href={CV} download target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-mono mt-4 shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
          >
            Download Resume
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
