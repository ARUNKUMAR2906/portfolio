import { motion } from "framer-motion";
import SkillsList from "../common/SkillsList";

const Skills = ({ id }) => {
  return (
    <section id={id} className="my-7 flex flex-col items-center p-2">
      <h1 className="mb-6 uppercase text-xl tracking-tight font-extrabold text-center text-gray-200 font-rubik md:text-3xl">
        Skills
      </h1>
      <div className="flex items-center flex-wrap justify-center mt-4 gap-y-6 gap-x-6 max-w-[26ch] font-robomono md:max-w-fit md:gap-x-8">
        {/* HTML Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            skill="HTML"
          />
        </motion.div>

        {/* CSS Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            skill="CSS"
          />
        </motion.div>

        {/* JavaScript Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            skill="JavaScript"
          />
        </motion.div>

        {/* NodeJS Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
            skill="NodeJS"
          />
        </motion.div>

        <hr className="w-full md:w-[90%] h-[1px] my-3 text-gray-200" />

        {/* ReactJS Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            skill="ReactJS"
          />
        </motion.div>

        {/* ExpressJS Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            skill="ExpressJS"
          />
        </motion.div>

        {/* Tailwind CSS Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            skill="Tailwind"
          />
        </motion.div>

        {/* NPM Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
            skill="NPM"
          />
        </motion.div>

        <hr className="w-full md:w-[90%] h-[1px] my-3 text-gray-200" />

        {/* MongoDB Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
            skill="MongoDB"
          />
        </motion.div>

        {/* MySQL Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            skill="MySQL"
          />
        </motion.div>

        {/* C Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
            skill="C"
          />
        </motion.div>

        {/* C++ Skill Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          <SkillsList
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            skill="C++"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
