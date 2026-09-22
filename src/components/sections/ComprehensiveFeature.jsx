import { Container, Button } from "../ui";
import { ArrowRight, CheckCircle, ArrowUpRight } from "lucide-react";

export default function ComprehensiveFeature({ content, includeHero = true }) {
  return (
    <>
      {/* Hero Section - Only if includeHero is true */}
      {includeHero && content.hero && (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={content.hero.backgroundImage}
              alt={content.hero.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-heading font-bold text-brand/40">
                    {content.hero.number}
                  </span>
                  <div className="h-px flex-1 bg-brand/30" />
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {content.hero.title}
                </h1>

                <p className="text-xl md:text-2xl text-brand-light mb-6">
                  {content.hero.subtitle}
                </p>

                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  {content.hero.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  {content.hero.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">{feature.title}</h4>
                        <p className="text-sm text-white/70">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button href={content.hero.cta.href} className="inline-flex items-center gap-2 hover:bg-[#005a9a]" style={{ backgroundColor: "#006FB7", color: "white" }}>
                  {content.hero.cta.text}
                  <ArrowRight size={20} />
                </Button>
              </div>

              <div className="hidden lg:block relative">
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-right">
                  <p className="text-6xl font-heading font-bold text-white/20 uppercase tracking-widest">
                    {content.hero.overlayText}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Design Process Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-brand" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  THE DESIGN PROCESS
                </span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">
                {content.designProcess.title}
              </h2>

              <p className="text-muted text-lg leading-relaxed mb-8">
                {content.designProcess.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {content.designProcess.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">{step.title}</h4>
                      <p className="text-sm text-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={content.designProcess.image}
                alt="Design Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand text-white px-6 py-3 rounded-lg">
                <p className="text-sm font-semibold">{content.designProcess.imageLabel}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={content.whyChooseUs.image}
                alt="Why Choose Us"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-brand" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  WHY CHOOSE US
                </span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">
                {content.whyChooseUs.title}
              </h2>

              <p className="text-muted text-lg leading-relaxed mb-8">
                {content.whyChooseUs.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {content.whyChooseUs.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">{benefit.title}</h4>
                      <p className="text-sm text-muted">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Design Inspiration Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-brand" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand">
                DESIGN INSPIRATION
              </span>
              <span className="h-px w-12 bg-brand" />
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">
              {content.designInspiration.title}
            </h2>

            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
              {content.designInspiration.description}
            </p>

            {content.designInspiration.cta && (
              <Button href={content.designInspiration.cta.href} className="inline-flex items-center gap-2 hover:bg-[#005a9a]" style={{ backgroundColor: "#006FB7", color: "white" }}>
                {content.designInspiration.cta.text}
                <ArrowUpRight size={20} />
              </Button>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.designInspiration.styles.map((style, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">{style.name}</h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-white/30" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                READY TO GET STARTED?
              </span>
              <span className="h-px w-12 bg-white/30" />
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {content.cta.title}
            </h2>

            <p className="text-white/80 text-lg mb-8">
              {content.cta.description}
            </p>

            <Button href={content.cta.cta.href} className="inline-flex items-center gap-2 hover:bg-[#005a9a]" style={{ backgroundColor: "#006FB7", color: "white" }}>
              {content.cta.cta.text}
              <ArrowRight size={20} />
            </Button>

            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              {content.cta.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                  <p className="text-sm text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
