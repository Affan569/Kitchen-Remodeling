import { Container, Highlight, Button } from "../ui";
import { tempSection } from "../../data";

export default function Temp() {
  return (
    <section
      id="services"
      className="relative z-10 min-h-[150vh] bg-white py-24 shadow-[0_-24px_60px_rgba(0,0,0,0.25)] md:py-32"
    >
      <Container>
        <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-olive">
          Temporary section
        </p>

        <h2 className="max-w-3xl text-ink">
          {tempSection.titleStart}{" "}
          <Highlight>{tempSection.titleHighlight}</Highlight>{" "}
          {tempSection.titleEnd}
        </h2>

        <p className="mt-6 max-w-xl text-muted">{tempSection.text}</p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="#top">Primary</Button>
          <Button href="#top" variant="outline">
            Outline
          </Button>
        </div>
      </Container>
    </section>
  );
}