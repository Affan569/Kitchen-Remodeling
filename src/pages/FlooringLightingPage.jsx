import { Hero, ComprehensiveFeature } from "../components/sections";
import { servicePages } from "../data";

export default function FlooringLightingPage() {
  const service = servicePages.flooringLighting;

  return (
    <>
      <Hero
        eyebrow="Flooring & Lighting"
        titleStart="Complete"
        titleHighlight="Flooring & Lighting"
        subtext="Layered lighting and durable flooring that finish the room beautifully."
        enableVideo={false}
        isSticky={false}
      />
      <ComprehensiveFeature content={service} includeHero={false} />
    </>
  );
}
