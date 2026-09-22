import { Hero, ComprehensiveFeature } from "../components/sections";
import { servicePages } from "../data";

export default function FullRemodelsPage() {
  const service = servicePages.fullRemodels;

  return (
    <>
      <Hero
        eyebrow="Full Remodels"
        titleStart="Complete"
        titleHighlight="Kitchen Remodels"
        subtext="Structural changes, open-plan spaces, and complete kitchen transformations."
        enableVideo={false}
        isSticky={false}
      />
      <ComprehensiveFeature content={service} includeHero={false} />
    </>
  );
}
