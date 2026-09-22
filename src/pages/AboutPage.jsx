import { Hero, ComprehensiveFeature } from "../components/sections";
import { servicePages } from "../data";

export default function AboutPage() {
  const service = servicePages.about;

  return (
    <>
      <Hero
        eyebrow="About Us"
        titleStart="A Personal Service From a"
        titleHighlight="Family Business"
        subtext="For more than 50 years, we've focused on a smooth, professional, and supportive experience—free from any high-pressure sales tactics."
        enableVideo={false}
        isSticky={false}
      />
      <ComprehensiveFeature content={service} includeHero={false} />
    </>
  );
}