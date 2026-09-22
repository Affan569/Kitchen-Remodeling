import { Container, Highlight, BeforeAfter } from "../ui";
import { projectsSection, projects } from "../../data";

export default function Projects() {
  // Show only first 2 projects on main page
  const featuredProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="relative z-10 bg-white py-20">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand">
            {projectsSection.eyebrow}
          </p>
          <h2 className="text-ink pb-2">
            {projectsSection.titleStart} {projectsSection.titleHighlight}
          </h2>
          <div className="mx-auto mt-6 rounded-full bg-brand" style={{ height: "4px", width: "96px" }} />
          <p className="mt-5 text-muted">{projectsSection.text}</p>
        </div>

        <div className="space-y-12">
          {featuredProjects.map(function (project) {
            return (
              <BeforeAfter
                key={project.id}
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                title={project.title}
                location={project.location}
              />
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 bg-brand px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-brand-dark"
          >
            View All Projects
          </a>
        </div>
      </Container>
    </section>
  );
}