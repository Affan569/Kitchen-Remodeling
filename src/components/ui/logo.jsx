export default function Logo({ className = "h-12 md:h-14", alt = "Logo" }) {
  return (
    <img
      src="/assets/logo.jpg"
      alt={alt}
      className={"w-auto object-contain " + className}
    />
  );
}