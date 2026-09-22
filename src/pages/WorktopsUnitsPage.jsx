import { Hero, ComprehensiveFeature } from "../components/sections";
import { servicePages } from "../data";

export default function WorktopsUnitsPage() {
  const service = servicePages.worktopsUnits;

  return (
    <>
      <Hero
        eyebrow="Worktops & Units"
        titleStart="Premium"
        titleHighlight="Worktops & Units"
        subtext="Quartz, granite, wood and handleless cabinetry in finishes made to last."
        enableVideo={false}
        isSticky={false}
      />
      <ComprehensiveFeature content={service} includeHero={false} />
    </>
  );
}
