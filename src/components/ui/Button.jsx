const base =
  "inline-flex h-[52px] items-center justify-center gap-2 px-8 " +
  "text-[0.8125rem] font-medium uppercase tracking-[0.12em] whitespace-nowrap " +
  "transition-all duration-300 cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light";

const variants = {
  // Blue fill, white text
  primary: "bg-brand text-white hover:bg-brand-dark",
  // Transparent, white border (use on video / dark backgrounds)
  secondary:
    "border border-white/80 bg-transparent text-white hover:bg-white hover:text-brand-dark",
  // Transparent, blue border (use on white backgrounds)
  outline:
    "border border-brand bg-transparent text-brand hover:bg-brand hover:text-white",
  // White fill (use on dark blue backgrounds, e.g. footer)
  light: "bg-white text-brand-dark hover:bg-brand-tint",
  // Text only
  ghost: "px-0 text-brand hover:text-brand-dark underline-offset-8 hover:underline",
};

export default function Button({
  variant = "primary",
  pill = false,
  href,
  className = "",
  children,
  ...props
}) {
  const radius = pill ? "rounded-[50px]" : "rounded-[2px]";
  const classes = base + " " + radius + " " + variants[variant] + " " + className;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}