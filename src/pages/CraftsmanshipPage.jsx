import { Hero, ComprehensiveFeature } from "../components/sections";
import { servicePages } from "../data";

export default function CraftsmanshipPage() {
  const service = servicePages.craftsmanship;

  return (
    <>
      <Hero
        eyebrow="Our Craftsmanship"
        titleStart="Fully Project Managed"
        titleHighlight="Installation"
        subtext="With more than 50 years under our belt handling complete kitchen and bathroom projects, you can trust that you are in expert hands."
        enableVideo={false}
        isSticky={false}
      />
      <ComprehensiveFeature content={service} includeHero={false} />
    </>
  );
}