import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button, Container, Logo } from "../ui";
import { site, nav, cta } from "../../data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Transparent at top, white blur after scrolling
  useEffect(function () {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Highlight the nav link of the section currently in view
  useEffect(function () {
    const sections = nav
      .filter(function (item) {
        return item.href.startsWith("#");
      })
      .map(function (item) {
        return document.querySelector(item.href);
      })
      .filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (s) {
      observer.observe(s);
    });
    return function () {
      observer.disconnect();
    };
  }, []);

  // ESC closes the mobile menu + lock body scroll while it is open
  useEffect(
    function () {
      function onKey(e) {
        if (e.key === "Escape") setOpen(false);
      }
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = open ? "hidden" : "";
      return function () {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    },
    [open]
  );

  function closeMenu() {
    setOpen(false);
  }

  function toggleMenu() {
    setOpen(!open);
  }

  // Solid (white) look only when scrolled and the mobile menu is closed
  const solid = scrolled && !open;
  const textColor = solid ? "text-brand-dark" : "text-white";
  const accentBg = solid ? "bg-brand" : "bg-brand-light";

  const headerClass =
    "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
    (solid ? "h-[72px] bg-white/85 backdrop-blur-md" : "h-[84px] bg-transparent");

  const navLinkClass =
    "group relative py-2 text-[0.8125rem] font-medium uppercase tracking-[0.12em] " +
    "transition-colors duration-300 focus-visible:outline-2 " +
    "focus-visible:outline-offset-4 focus-visible:outline-brand-light " +
    textColor;

  const phoneClass =
    "hidden items-center gap-2 text-sm font-medium transition-colors duration-300 xl:flex " +
    textColor;

  const burgerClass =
    "flex h-11 w-11 items-center justify-center rounded-[2px] transition-colors duration-300 lg:hidden " +
    (open ? "text-white" : textColor);

  const underlineClass =
    "absolute inset-x-0 bottom-0 h-[2px] origin-left bg-brand transition-transform duration-500 ease-out " +
    (solid ? "scale-x-100" : "scale-x-0");

  const mobileMenuClass =
    "fixed inset-0 z-40 bg-brand-dark transition-all duration-500 lg:hidden " +
    (open ? "visible opacity-100" : "invisible opacity-0");

  const mobileLinkClass =
    "font-heading text-4xl text-white transition-colors hover:text-brand-light";

  const burgerLabel = open ? "Close menu" : "Open menu";

  return (
    <>
      <header className={headerClass}>
        <Container className="flex h-full items-center justify-between gap-6">
          <a href="#top" aria-label="Home" className="flex items-center">
        <Logo className="h-14 md:h-18" alt={site.brand} />
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map(function (item) {
                const isActive = active === item.href;
                const isRoute = item.href.startsWith("/");
                const linkHref = isRoute ? item.href : (item.href === "#top" ? "/" : item.href);
                const underline =
                  "absolute -bottom-0.5 left-0 h-[2px] w-full origin-left transition-transform duration-300 " +
                  accentBg +
                  " " +
                  (isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100");
                return (
                  <li key={item.href}>
                    <a href={linkHref} className={navLinkClass}>
                      {item.label}
                      <span className={underline} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className={phoneClass}>
              <Phone size={16} strokeWidth={1.5} />
              {site.phone}
            </a>

            <Button href={cta.href} pill className="hidden md:inline-flex">
  {cta.label}
</Button>

            <button type="button" onClick={toggleMenu} aria-label={burgerLabel} aria-expanded={open} aria-controls="mobile-menu" className={burgerClass}>
              {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            </button>
          </div>
        </Container>

        <span aria-hidden="true" className={underlineClass} />
      </header>

      <div id="mobile-menu" aria-hidden={!open} className={mobileMenuClass}>
        <div className="flex h-full flex-col justify-center px-8 pb-10 pt-28">
          <ul className="space-y-5">
            {nav.map(function (item, i) {
              const itemClass =
                "transition-all duration-500 " +
                (open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0");
              const delay = open ? 120 + i * 60 + "ms" : "0ms";
              const isRoute = item.href.startsWith("/");
              const linkHref = isRoute ? item.href : (item.href === "#top" ? "/" : item.href);
              return (
                <li key={item.href} className={itemClass} style={{ transitionDelay: delay }}>
                  <a href={linkHref} onClick={closeMenu} className={mobileLinkClass}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 space-y-5">
            <a href={site.phoneHref} className="flex items-center gap-2 text-white/90">
              <Phone size={18} strokeWidth={1.5} />
              {site.phone}
            </a>
            <Button href={cta.href} variant="light" onClick={closeMenu} className="w-full sm:w-auto">
              {cta.label}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}