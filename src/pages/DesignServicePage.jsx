import { Hero, ComprehensiveFeature } from "../components/sections";
import { servicePages } from "../data";

export default function DesignServicePage() {
  const service = servicePages.designService;

  return (
    <>
      <Hero
        eyebrow="Our Design Service"
        titleStart="Designed Especially"
        titleHighlight="For You"
        subtext="Every kitchen and bathroom we design is as unique as your personal style—whether you love contemporary chic or timeless traditional looks."
        enableVideo={false}
        isSticky={false}
      />
      <ComprehensiveFeature content={service} includeHero={false} />
    </>
  );
}