import { Hero, ComprehensiveFeature } from "../components/sections";
import { servicePages } from "../data";

export default function KitchenDesignPage() {
  const service = servicePages.kitchenDesign;

  return (
    <>
      <Hero
        eyebrow="Kitchen Design"
        titleStart="Bespoke 3D"
        titleHighlight="Kitchen Design"
        subtext="Bespoke 3D layouts planned around how you cook, live and entertain."
        enableVideo={false}
        isSticky={false}
      />
      <ComprehensiveFeature content={service} includeHero={false} />
    </>
  );
}
