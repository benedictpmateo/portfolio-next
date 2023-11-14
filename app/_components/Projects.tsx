import projects from "../_constants/projects";
import ProjectsItem from "./ProjectsItem";

export default function Projects() {
  return (
    <div id="projects" className="space-y-8">
      <div className="text-blue-accent">featured projects</div>
      <div className="space-y-4">
        {projects.map((project, key) => (
          <ProjectsItem
            key={key}
            path={project?.path}
            name={project.name}
            link={project.link}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
}
