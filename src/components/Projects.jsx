import projectData from "../data/projectData.json";
import blogSiteImg from "../assets/blog-site.png";
import weatherSiteImg from "../assets/wheather-site.png";
import todoSiteImg from "../assets/todo-site.png";
import udemySiteImg from "../assets/udemy-site.png";
import githubIcon from "../assets/github-dark.svg";
import shoppingImg from "../assets/shopping.png";
import greendenImg from "../assets/greenden.png";

// Create a mapping of image names to imported images
const images = {
  "blog-site.png": blogSiteImg,
  "weather-site.png": weatherSiteImg,
  "todo-site.png": todoSiteImg,
  "udemy-site.png": udemySiteImg,
  "shopping-site.png": shoppingImg,
  "greenden-site.png": greendenImg,
};

const Projects = ({ id }) => {
  return (
    <section id={id} className="py-8 lg:py-16 px-6 mx-auto max-w-screen">
      <h1 className="mb-6 uppercase text-xl tracking-tight font-extrabold text-center text-gray-200 font-rubik md:text-3xl">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container font-robomono">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md transition duration-200 ease-in-out hover:scale-105 active:translate-y-2 active:shadow-sm"
          >
            <a href={project.livesite} target="_blank">
              <img
                src={images[project.image]}
                alt={project.name}
                className="rounded-t-lg h-44 w-full object-cover"
              />
              <h3 className="text-lg font-semibold mt-4 text-gray-200">
                {project.name}
              </h3>
              <div className="mt-2 flex justify-between">
                <a
                  href={project.livesite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline"
                >
                  <img className="w-8" src={githubIcon} alt="Github icon" />
                </a>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
