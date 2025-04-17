const SkillsList = ({ src, skill }) => {
  return (
    <div
      className="skill-item flex gap-2 items-center hover:scale-105 transition-transform duration-300 group"
      title={skill}
    >
      <img
        src={src}
        alt={`${skill} icon`}
        className="w-6 md:w-8 group-hover:rotate-6 transition-transform duration-300"
      />
      <p className="text-gray-200 md:text-lg">{skill}</p>
    </div>
  );
};

export default SkillsList;
