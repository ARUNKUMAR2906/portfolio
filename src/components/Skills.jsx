import SkillsList from "../common/SkillsList";

const Skills = ({ id }) => {
  return (
    <section id={id} className="my-7 flex flex-col items-center p-2">
      <h1 className="mb-6 uppercase text-xl tracking-tight font-extrabold text-center text-gray-200 font-rubik md:text-3xl">
        Skills
      </h1>
      <div className="flex items-center flex-wrap justify-center mt-4 gap-y-6 gap-x-6 max-w-[26ch] font-robomono md:max-w-fit md:gap-x-8">
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          skill="HTML"
        />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          skill="CSS"
        />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          skill="JavaScript"
        />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
          skill="NodeJS"
        />
        <hr className="w-full md:w-[90%] h-[1px] my-3 text-gray-200" />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          skill="ReactJS"
        />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          skill="ExpressJS"
        />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          skill="Tailwind"
        />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
          skill="NPM"
        />
        <hr className="w-full md:w-[90%] h-[1px] my-3 text-gray-200" />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
          skill="MongoDB"
        />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
          skill="MySQL"
        />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
          skill="C"
        />
        <SkillsList
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
          skill="C++"
        />
      </div>
    </section>
  );
};

export default Skills;
