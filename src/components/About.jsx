import aboutImg from "../assets/a1.jpg";
const About = ({id}) => {
  return (
    <section id={id} className="my-6 text-center ">
      <h1 className="mb-6 uppercase text-xl tracking-tight font-extrabold  text-gray-200 font-rubik md:text-3xl">
        About Me
      </h1>
      <div className="flex px-10 justify-evenly">
        <div className="hidden md:flex relative">
          {/* Image with Overlay */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="About image"
              className="rounded-lg w-72 lg:w-80 xl:w-96"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          </div>
        </div>
        <div className="text-gray-200 font-robomono max-w-xl mx-auto px-2 md:w-1/2  md:text-left lg:text-xl xl:text-2xl">
          I am an enthusiastic software developer specializing in the MERN stack
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
