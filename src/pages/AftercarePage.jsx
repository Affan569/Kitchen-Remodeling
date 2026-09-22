import { Hero, ComprehensiveFeature } from "../components/sections";
import { servicePages } from "../data";

export default function AftercarePage() {
  const service = servicePages.aftercare;

  return (
    <>
      <Hero
        eyebrow="Quality & Aftercare"
        titleStart="Quality Furniture &"
        titleHighlight="Appliances"
        subtext="Step into our showroom to feel the unmatched quality of the rigid furniture we're so proud of."
        enableVideo={false}
        isSticky={false}
      />
      <ComprehensiveFeature content={service} includeHero={false} />
    </>
  );
}