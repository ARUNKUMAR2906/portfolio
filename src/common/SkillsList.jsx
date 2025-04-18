const SkillsList = ({ src, skill }) => {
  return (
    <div className="group flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 p-2 rounded-lg transition duration-300 transform hover:scale-110 bg-white/5 backdrop-blur-md shadow-md hover:shadow-lg">
      <img
        src={src}
        alt={skill}
        className="w-10 h-10 md:w-12 md:h-12 object-contain transition duration-300"
      />
      <span className="mt-2 text-xs md:text-sm text-gray-200 font-medium group-hover:text-cyan-300">
        {skill}
      </span>
    </div>
  );
};

export default SkillsList;
