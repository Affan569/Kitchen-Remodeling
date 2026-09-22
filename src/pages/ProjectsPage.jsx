import { Hero } from "../components/sections";
import { Container, BeforeAfter } from "../components/ui";
import { projectsSection, projects } from "../data";

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="Our Work"
        titleStart="Our"
        titleHighlight="Projects"
        subtext="See the transformation from old to new with our before and after comparisons."
        secondaryCta={null}
        enableVideo={false}
        enableAnimation={false}
        isSticky={false}
      />

      {/* Our Projects Section - White Background */}
      <div className="bg-white py-20">
        <Container>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand">
              {projectsSection.eyebrow}
            </p>
            <h1 className="text-ink pb-2">
              {projectsSection.titleStart} {projectsSection.titleHighlight}
            </h1>
            <div className="mx-auto mt-6 rounded-full bg-brand" style={{ height: "4px", width: "96px" }} />
            <p className="mt-5 text-muted">{projectsSection.text}</p>
          </div>

          {/* Before/After Project Cards - Same Design as Main Page */}
          <div className="space-y-12">
            {projects.map(function (project) {
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
        </Container>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-ink mb-6 pb-2">Our Project Process</h1>
            <div className="mb-6 rounded-full bg-brand" style={{ height: "4px", width: "96px" }} />
            <p className="text-muted leading-relaxed mb-6">
              Every project we undertake follows a meticulous process to ensure exceptional results. From initial consultation to final handover, we maintain the highest standards of quality and attention to detail.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Our team works closely with you to understand your vision, preferences, and lifestyle requirements. We then translate this into a detailed design that balances aesthetics with functionality, ensuring your new space not only looks beautiful but works perfectly for your needs.
            </p>
            <p className="text-muted leading-relaxed">
              With over 50 years of experience, we have refined our craft to deliver consistent, outstanding results. Our commitment to quality materials, expert installation, and exceptional aftercare has made us the trusted choice for kitchen and bathroom transformations across Southampton and Hampshire.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
