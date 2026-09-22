import { useEffect, useRef, useState } from "react";
import { Star, Hammer, CalendarCheck, ShieldCheck } from "lucide-react";
import { Button, Container, Highlight } from "../ui";
import { hero, trustItems } from "../../data";

const icons = { Star, Hammer, CalendarCheck, ShieldCheck };

// Video speed: 1 = normal, 0.5 = half speed, 0.3 = very slow
const VIDEO_SPEED = 0.8;

export default function Hero({
  eyebrow = hero.eyebrow,
  titleStart = hero.titleStart,
  titleHighlight = hero.titleHighlight,
  subtext = hero.subtext,
  primaryCta = hero.primaryCta,
  secondaryCta = hero.secondaryCta,
  videoSrc = hero.videoSrc,
  enableVideo = true,
  enableAnimation = true,
  isSticky = true,
}) {
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Respect prefers-reduced-motion
  useEffect(function () {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    function onChange(e) {
      setReducedMotion(e.matches);
    }
    mq.addEventListener("change", onChange);
    return function () {
      mq.removeEventListener("change", onChange);
    };
  }, []);

  // Slow video
  function applySpeed() {
    const video = videoRef.current;
    if (video) video.playbackRate = VIDEO_SPEED;
  }

  useEffect(
    function () {
      const video = videoRef.current;
      if (!video || reducedMotion) return;
      video.muted = true;
      applySpeed();
      video.play().catch(function () {});
    },
    [reducedMotion]
  );

  // 3D scroll effect on the hero text
  useEffect(
    function () {
      if (reducedMotion) return undefined;
      let ticking = false;

      function update() {
        const h = window.innerHeight;
        const raw = window.scrollY / (h * 0.7);
        const p = Math.min(Math.max(raw, 0), 1);
        const content = contentRef.current;
        const video = videoRef.current;

        if (content) {
          const lift = -p * 140;
          const tilt = p * 28;
          const scale = 1 - p * 0.1;
          content.style.transform =
            "perspective(1200px) translate3d(0," + lift + "px,0) rotateX(" + tilt + "deg) scale(" + scale + ")";
          content.style.opacity = String(Math.max(0, 1 - p * 1.25));
        }
        if (video) {
          video.style.transform = "scale(" + (1 + p * 0.08) + ")";
        }
        ticking = false;
      }

      function onScroll() {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      }

      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      return function () {
        window.removeEventListener("scroll", onScroll);
      };
    },
    [reducedMotion]
  );

  function onVideoError() {
    setVideoFailed(true);
  }

  const showVideo = !videoFailed && !reducedMotion && enableVideo;
  const showImage = !showVideo && videoSrc;
  const useAnimation = !reducedMotion && enableAnimation;

  return (
    <section
      id="top"
      aria-label="Introduction"
      className={`${isSticky ? 'sticky top-0' : 'relative'} z-0 flex h-svh w-full flex-col justify-end overflow-hidden`}
      style={{
        background: "linear-gradient(135deg, #061225 0%, #0b2447 55%, #1e56b8 100%)",
      }}
    >
      {showVideo && videoSrc && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedMetadata={applySpeed}
          onPlay={applySpeed}
          onError={onVideoError}
        />
      )}

      {showImage && (
        <img
          src="/assets/1.jpg"
          alt="Projects background"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.3 }}
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(6,18,37,0.75) 0%, rgba(6,18,37,0.3) 55%, rgba(6,18,37,0.4) 100%)",
        }}
      />

      <Container className="relative z-10 pb-6 pt-28 md:pb-10">
        <div
          ref={contentRef}
          className="max-w-3xl will-change-transform"
          style={{ transformOrigin: "50% 100%" }}
        >
          <p
            className={useAnimation ? "animate-fade-up mb-5 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand-light" : "mb-5 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand-light"}
            style={useAnimation ? { animationDelay: "0.1s" } : {}}
          >
            {eyebrow}
          </p>

          <h1 className={useAnimation ? "animate-fade-up hero-heading text-white" : "hero-heading text-white"} style={useAnimation ? { animationDelay: "0.25s" } : {}}>
            {titleStart} {titleHighlight}
          </h1>

          <p
            className={useAnimation ? "animate-fade-up mt-6 max-w-xl text-base text-white/85 md:text-lg" : "mt-6 max-w-xl text-base text-white/85 md:text-lg"}
            style={useAnimation ? { animationDelay: "0.4s" } : {}}
          >
            {subtext}
          </p>

          <div
            className={useAnimation ? "animate-fade-up mt-8 flex flex-col gap-4 sm:flex-row" : "mt-8 flex flex-col gap-4 sm:flex-row"}
            style={useAnimation ? { animationDelay: "0.55s" } : {}}
          >
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>

      <div className="relative z-10 border-t border-white/20 bg-black/20 backdrop-blur-sm">
        <Container className="grid grid-cols-2 md:grid-cols-4">
          {trustItems.map(function (item, i) {
            const Icon = icons[item.icon];
            const cell =
              "flex items-center gap-3 py-3 md:justify-center md:py-5 " +
              (i % 2 === 1 ? "border-l border-white/20 pl-4 md:pl-0 " : "") +
              (i !== 0 ? "md:border-l md:border-white/20" : "");
            return (
              <div key={item.label} className={cell}>
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="shrink-0 text-brand-light"
                  aria-hidden="true"
                />
                <div className="leading-tight">
                  <div className="font-heading text-lg text-white md:text-xl">
                    {item.value}
                  </div>
                  <div className="text-xs text-white/70">{item.label}</div>
                </div>
              </div>
            );
          })}
        </Container>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-28 right-8 z-10 hidden flex-col items-center gap-3 text-white/70 xl:flex"
      >
        <span className="text-[0.6875rem] uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="animate-scroll-line block h-14 w-px bg-white/70" />
      </div>
    </section>
  );
}