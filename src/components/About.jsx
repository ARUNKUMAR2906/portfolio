import aboutImg from "../assets/a1.jpg";

const About = ({ id }) => {
  return (
    <section id={id} className="my-10 text-center px-4">
      <h1 className="mb-8 uppercase text-xl tracking-tight font-extrabold text-gray-200 font-rubik md:text-3xl">
        About Me
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-screen-xl mx-auto">
        {/* Image Section with glass overlay */}
        <div className="relative hidden md:block group rounded-xl overflow-hidden shadow-xl">
          <img
            src={aboutImg}
            alt="About image"
            className="rounded-xl w-72 lg:w-80 xl:w-96 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Glass effect overlay */}
          <div className="absolute inset-0 backdrop-blur-md bg-black/30 rounded-xl transition duration-500 group-hover:bg-black/10"></div>
        </div>

        {/* Text Section with frosted card */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-xl text-gray-200 font-robomono text-justify max-w-2xl md:text-left text-base md:text-lg lg:text-xl xl:text-2xl transition duration-300 hover:scale-[1.02]">
          I am an enthusiastic software developer specializing in the{" "}
          <span className="text-purple-400 font-semibold">MERN stack</span>{" "}
          (MongoDB, Express.js, React, and Node.js). As a fresher, I am eager to
          apply my knowledge in building responsive and dynamic web
          applications. My focus is on writing clean, efficient code and
          continuously learning the latest technologies to improve my skill set.
          I am passionate about solving problems through technology and am
          excited to contribute to innovative projects as I begin my career in
          the tech industry.
        </div>
      </div>
    </section>
  );
};

export default About;
