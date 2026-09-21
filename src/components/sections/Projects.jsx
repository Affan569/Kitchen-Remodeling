import React, { useState } from "react";
import { Section, Icon, ScrollReveal } from "../ui";
import { projectsData } from "../../data";

const Lightbox = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-5xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
          aria-label="Close lightbox"
        >
          <Icon name="close" size={32} />
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="mt-4 text-white">
          <h3 className="font-heading text-2xl font-bold">{project.title}</h3>
          <p className="text-neutral-300 mt-2">{project.description}</p>
          <p className="text-sm text-neutral-400 mt-1">
            {project.location} • {project.category}
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Section id="projects" background="alt" padding="large">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {projectsData.heading}
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              {projectsData.subheading}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-heading text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-300 mb-2">
                      {project.location}
                    </p>
                    <p className="text-xs text-accent font-medium">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {selectedProject && (
        <Lightbox
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
