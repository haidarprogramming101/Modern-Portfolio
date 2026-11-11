import { ArrowRightIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Movie-app",
    image: "/projects/proOne.png",
    githubUrl: "https://github.com/haidarprogramming101/movie-website",
  },
  {
    id: 2,
    title: "Clock-app",
    image: "/projects/proTwo.png",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. I have more projects in my github
          accout which ill link you to.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => {
            return (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold m-2">{project.title}</h3>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <FaGithub size={25} className="m-6" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/haidarprogramming101"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
