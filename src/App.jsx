import React from "react";
import { Header, Footer, ScrollWrapper } from "./components/layout";
import {
  Hero,
  TrustBar,
  Services,
  BeforeAfter,
  Projects,
  Process,
  Video,
  WhyChooseUs,
  Testimonials,
  Finance,
  FAQ,
  Contact,
} from "./components/sections";

function App() {
  return (
    <ScrollWrapper>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <TrustBar />
          <Services />
          <BeforeAfter />
          <Projects />
          <Process />
          <Video />
          <WhyChooseUs />
          <Testimonials />
          <Finance />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ScrollWrapper>
  );
}

export default App;
