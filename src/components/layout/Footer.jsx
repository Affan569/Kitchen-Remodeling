import { ArrowUp, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button, Container, Highlight, Logo } from "../ui";
import { site, footer, cta } from "../../data";

const headingClass =
  "mb-5 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-brand";

const linkClass =
  "text-sm text-muted transition-colors duration-300 hover:text-brand";

const socialClass =
  "flex h-11 w-11 items-center justify-center rounded-[2px] border border-brand/20 text-brand transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white hover:scale-110 hover:shadow-lg";

function SocialIcon(props) {
  const icons = {
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
      </svg>
    ),
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
      </svg>
    ),
    youtube: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335H6.117c-.582-.001-4.919-.024-6.18-.335A2.01 2.01 0 0 1 .354 11.37c-.113-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.001-.215.01-1.01.082-2.06l.008-.104.009-.104c.05-.572.124-1.14.235-1.558a2.01 2.01 0 0 1 1.415-1.42c.563-.15 1.995-.28 6.18-.335zM6.004 5.307v5.386l4.8-2.693-4.8-2.693z"/>
      </svg>
    ),
  };

  return icons[props.name] || <span className="text-sm font-medium">{props.name.charAt(0)}</span>;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative z-10 bg-white text-ink">
      {/* Blue top border */}
      <div className="h-1 bg-brand" />

      {/* CTA strip */}
      <div className="border-b border-brand/10">
        <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
          <h2 className="max-w-2xl text-ink">
            {footer.ctaStart} {footer.ctaHighlight}
          </h2>
          <Button href={cta.href} variant="primary">
            {cta.label}
          </Button>
        </Container>
      </div>

      {/* Main columns */}
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="#top" aria-label="Home" className="inline-block">
            <Logo className="h-16" alt={site.brand} />
          </a>
          <p className="mt-5 max-w-xs text-sm text-muted">{footer.description}</p>
          <ul className="mt-6 flex gap-3">
            {footer.social.map(function (item) {
              return (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    aria-label={item.label} 
                    className={socialClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon name={item.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h3 className={headingClass}>Quick Links</h3>
          <ul className="space-y-3">
            {footer.quickLinks.map(function (item) {
              return (
                <li key={item.label}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className={headingClass}>Services</h3>
          <ul className="space-y-3">
            {footer.services.map(function (item) {
              return (
                <li key={item.label}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className={headingClass}>Contact</h3>
          <ul className="space-y-4 text-sm text-muted">
            <li className="flex gap-3">
              <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-brand" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-brand" />
              <a href={site.phoneHref} className={linkClass}>
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-brand" />
              <a href={"mailto:" + site.email} className={linkClass}>
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-brand" />
              <div className="space-y-1">
                {site.hours.map(function (h) {
                  return (
                    <div key={h.day} className="flex gap-3">
                      <span className="w-20 text-muted/60">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-brand/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted md:flex-row">
          <p>
            &copy; {year} {site.brand}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footer.legal.map(function (item) {
              return (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-brand">
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[2px] border border-brand/20 text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <ArrowUp size={18} strokeWidth={1.5} />
          </button>
        </Container>
      </div>
    </footer>
  );
}