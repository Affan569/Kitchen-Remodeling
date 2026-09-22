import { Hero, ComprehensiveFeature } from "../components/sections";
import { servicePages } from "../data";

export default function PlumbingAppliancesPage() {
  const service = servicePages.plumbingAppliances;

  return (
    <>
      <Hero
        eyebrow="Plumbing & Appliances"
        titleStart="Certified"
        titleHighlight="Plumbing & Appliances"
        subtext="Safe, certified plumbing, gas, and appliance fitting, all in one visit."
        enableVideo={false}
        isSticky={false}
      />
      <ComprehensiveFeature content={service} includeHero={false} />
    </>
  );
}
