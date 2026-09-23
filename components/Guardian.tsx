/** The hourglass guardian mascot (transparent art, 560×560). WebP with PNG fallback. */
export default function Guardian({
  alt,
  className = "",
  eager = false,
}: {
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <picture className={`block ${className}`}>
      <source srcSet="/brand/guardian.webp" type="image/webp" />
      <img
        src="/brand/guardian.png"
        alt={alt}
        width={560}
        height={560}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full select-none drop-shadow-[0_18px_30px_rgba(32,15,63,0.35)]"
        draggable={false}
      />
    </picture>
  );
}
