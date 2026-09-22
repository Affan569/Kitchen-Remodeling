import { Hero, ComprehensiveFeature } from "../components/sections";
import { servicePages } from "../data";

export default function FullInstallationPage() {
  const service = servicePages.fullInstallation;

  return (
    <>
      <Hero
        eyebrow="Full Installation"
        titleStart="Professional"
        titleHighlight="Installation Service"
        subtext="Precision fitting of units, worktops and appliances by trusted craftsmen."
        enableVideo={false}
        isSticky={false}
      />
      <ComprehensiveFeature content={service} includeHero={false} />
    </>
  );
}
