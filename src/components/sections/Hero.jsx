import React from "react";
import { Button, Icon } from "../ui";
import { heroData } from "../../data";
import HeroScene from "./HeroScene.jsx";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight">
                {heroData.headline}
              </h1>
              <p className="text-lg md:text-xl text-text-light max-w-xl">
                {heroData.subheadline}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {heroData.trustBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center space-x-2 bg-neutral-50 px-4 py-2 rounded-lg border border-neutral-200"
                >
                  <Icon name={badge.icon} size={20} className="text-accent" />
                  <span className="text-sm font-medium text-text">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={heroData.primaryCta.href} size="lg">
                {heroData.primaryCta.text}
              </Button>
              <Button
                href={heroData.secondaryCta.href}
                variant="ghost"
                size="lg"
              >
                {heroData.secondaryCta.text}
              </Button>
            </div>
          </div>

          {/* Right - Hero Visual Area */}
          <div className="relative">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
