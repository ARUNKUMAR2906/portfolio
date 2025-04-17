import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroImg from "../assets/hero-img.jpg";
import twitterIcon from "../assets/twitter-dark.svg";
import githubIcon from "../assets/github-dark.svg";
import linkedinIcon from "../assets/linkedin-dark.svg";
import CV from "../assets/CV.pdf";

const Hero = ({ id }) => {
  return (
    <section
      id={id}
      className="p-6 flex flex-col gap-6 items-center justify-center text-center h-screen pt-5 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 md:flex-row-reverse md:justify-center md:items-center md:gap-0"
    >
      <div className="md:w-1/2 flex justify-center shadow-lg rounded-full overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          className="w-52 md:w-72 xl:w-80 rounded-full object-cover transition-transform duration-500"
          src={heroImg}
          alt="profile picture of Arun Kumar"
        />
      </div>
      <div className="text-white flex flex-col gap-4 md:gap-6 md:w-1/2 md:items-center xl:gap-6">
        <h1 className="text-3xl font-bold uppercase font-rubik tracking-tight md:text-4xl xl:text-5xl text-shadow-lg">
          Arun <br className="md:hidden" /> Kumar
        </h1>
        <h2 className="font-robomono text-lg md:text-xl xl:text-2xl text-gray-200">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Java Developer",
              "React Developer",
              "Web Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <div className="flex gap-3 items-center justify-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/arunkumar-babu-7983502ba/"
            target="_blank"
          >
            <img
              className="w-10 md:w-12 xl:w-14"
              src={linkedinIcon}
              alt="Linkedin icon"
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/ARUNKUMAR2906"
            target="_blank"
          >
            <img
              className="w-10 md:w-12 xl:w-14"
              src={githubIcon}
              alt="Github icon"
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://x.com/Arundev2901"
            target="_blank"
          >
            <img
              className="w-10 md:w-12 xl:w-14"
              src={twitterIcon}
              alt="Twitter icon"
            />
          </motion.a>
        </div>
        <p className="text-gray-200 font-robomono md:w-[40ch] xl:text-xl">
          Passionate full-stack developer with expertise in Java, JavaScript,
          React and modern web technologies.
        </p>
        <a href={CV} download target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-6 py-3 font-robomono hover:bg-gradient-to-l active:translate-y-1 xl:text-xl transition duration-300"
          >
            Download Resume
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
