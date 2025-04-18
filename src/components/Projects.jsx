import { useState } from "react";
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
  // State to track the loaded images
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (projectId) => {
    setLoadedImages((prevState) => ({
      ...prevState,
      [projectId]: true,
    }));
  };

  return (
    <section id={id} className="py-8 lg:py-16 px-6 mx-auto max-w-screen">
      <h1 className="mb-6 uppercase text-xl tracking-tight font-extrabold text-center text-gray-200 font-rubik md:text-3xl">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container font-robomono">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="relative border p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:opacity-90 active:translate-y-2 active:shadow-sm min-h-[350px] group"
          >
            {/* Image with placeholder */}
            <a
              href={project.livesite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                {/* Loading Placeholder */}
                {!loadedImages[project.id] && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-t-lg"></div>
                )}
                <img
                  src={images[project.image] || "/path/to/fallback-image.png"}
                  alt={`${project.name} screenshot`}
                  className={`rounded-t-lg h-44 w-full object-cover transition-opacity duration-500 ease-in-out ${
                    loadedImages[project.id] ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(project.id)}
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-200 group-hover:text-blue-500">
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
            {/* Hover info or tag */}
            <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xs">{project.techStack}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
