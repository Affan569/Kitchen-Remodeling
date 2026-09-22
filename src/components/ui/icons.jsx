// Custom line-style SVG icons, drawn with currentColor so they inherit the brand color.
const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };

export function IconDesign(props) {
  return (
    <svg viewBox="0 0 48 48" width="32" height="32" {...common} {...props}>
      <path d="M8 34 L30 12 L36 18 L14 40 L8 40 Z" />
      <path d="M26 16 L32 22" />
      <path d="M6 42 L10 42" />
      <circle cx="34" cy="14" r="3" />
    </svg>
  );
}

export function IconInstall(props) {
  return (
    <svg viewBox="0 0 48 48" width="32" height="32" {...common} {...props}>
      <rect x="10" y="10" width="14" height="14" rx="1" />
      <rect x="26" y="24" width="14" height="14" rx="1" />
      <path d="M17 24 L17 30 L26 30" />
      <path d="M31 17 L38 17 L38 24" />
    </svg>
  );
}

export function IconWorktop(props) {
  return (
    <svg viewBox="0 0 48 48" width="32" height="32" {...common} {...props}>
      <path d="M6 18 H42 L38 24 H10 Z" />
      <path d="M10 24 V38" />
      <path d="M38 24 V38" />
      <path d="M6 38 H42" />
      <path d="M16 18 V8 H30 V18" strokeDasharray="2 3" />
    </svg>
  );
}

export function IconPlumbing(props) {
  return (
    <svg viewBox="0 0 48 48" width="32" height="32" {...common} {...props}>
      <path d="M10 8 V20 H24 V38" />
      <circle cx="24" cy="41" r="3" />
      <path d="M30 12 H40 V20 H30 Z" />
      <path d="M35 20 V26" />
    </svg>
  );
}

export function IconLighting(props) {
  return (
    <svg viewBox="0 0 48 48" width="32" height="32" {...common} {...props}>
      <path d="M24 6 C16 6 11 12 11 19 C11 25 15 27 16 32 H32 C33 27 37 25 37 19 C37 12 32 6 24 6 Z" />
      <path d="M18 37 H30" />
      <path d="M20 42 H28" />
      <path d="M24 32 V26" />
    </svg>
  );
}

export function IconRemodel(props) {
  return (
    <svg viewBox="0 0 48 48" width="32" height="32" {...common} {...props}>
      <path d="M8 24 L24 10 L40 24" />
      <path d="M12 22 V40 H36 V22" />
      <path d="M20 40 V29 H28 V40" />
    </svg>
  );
}

export const cardIcons = {
  design: IconDesign,
  install: IconInstall,
  worktop: IconWorktop,
  plumbing: IconPlumbing,
  lighting: IconLighting,
  remodel: IconRemodel,
};