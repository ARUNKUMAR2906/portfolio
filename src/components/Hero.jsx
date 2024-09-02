import heroImg from "../assets/hero-img.jpg";
import twitterIcon from "../assets/twitter-dark.svg";
import githubIcon from "../assets/github-dark.svg";
import linkedinIcon from "../assets/linkedin-dark.svg";
import { motion } from "framer-motion";
import CV from "../assets/CV.pdf";

const Hero = ({ id }) => {
  return (
    <section
      id={id}
      className=" p-4 flex flex-col gap-4 items-center justify-center text-center  h-screen pt-5 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-600 md:flex-row-reverse md:justify-center md:items-center md:gap-0"
    >
      <div className="md:w-1/2 flex justify-center">
        <img
          className="w-44 md:w-60 xl:w-80 rounded-full"
          src={heroImg}
          alt="profile picture of Arun Kumar"
        />
      </div>
      <div className="text-gray-200 flex flex-col gap-2 md:gap-3 md:w-1/2 md:items-center xl:gap-4">
        <h1 className="uppercase font-rubik text-xl md:text-2xl xl:text-4xl">
          Arun
          <br className="md:hidden" />
          Kumar
        </h1>
        <h2 className="font-robomono uppercase xl:text-xl">
          Full-Stack Developer
        </h2>
        <span className="flex gap-2 items-center justify-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/arunkumar-babu-7983502ba/"
            target="_blank"
          >
            <img
              className="w-8 md:w-10 xl:w-14"
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
              className="w-8 md:w-10 xl:w-14"
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
              className="w-8 md:w-10 xl:w-14"
              src={twitterIcon}
              alt="twitter icon"
            />
          </motion.a>
        </span>
        <p className="text-gray-200 font-robomono md:w-[40ch] xl:text-2xl">
          {
            "Enthusiastic MERN stack developer with a solid foundation in creating full-stack web applications."
          }
        </p>
        <a href={CV} download={CV} target="_blank" className="">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-1 md:mt-2 bg-gray-200 text-gray-900 rounded-lg px-4 py-2 font-robomono hover:bg-gradient-to-r from-violet-500 to-purple-500  active:translate-y-2 active:shadow-sm xl:text-xl"
          >
            Resume
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
