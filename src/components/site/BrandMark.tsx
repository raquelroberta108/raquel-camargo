import marca from "@/assets/marca-raquel.jpeg";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#inicio"
      className="group inline-flex items-center gap-3"
      aria-label="Dra. Raquel Camargo — início"
    >
      <span
        className={`${compact ? "h-9 w-9" : "h-12 w-12"} overflow-hidden rounded-full border border-rose/30`}
      >
        <img
          src={marca}
          alt="Monograma da Dra. Raquel Camargo"
          className="h-full w-full scale-[1.7] object-cover"
        />
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg text-cream">Raquel Camargo</span>
        <span className="mt-1 block text-[0.56rem] uppercase tracking-[0.28em] text-rose">
          Biomédica Esteta
        </span>
      </span>
    </a>
  );
}
