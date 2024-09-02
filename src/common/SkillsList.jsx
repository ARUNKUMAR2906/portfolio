const SkillsList = ({ src , skill }) => {
  return (
    <div className="skill-item flex gap-2 items-center">
      <img src={src} alt={`${skill} icon`} className="w-6 md:w-8" />
      <p className="text-gray-200 md:text-lg">{skill}</p>
    </div>
  );
};

export default SkillsList;
