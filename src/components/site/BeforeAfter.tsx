import { useState } from "react";

type Props = { src: string; alt: string; position?: number; vertical?: boolean };

/** The source image holds "antes" and "depois" side by side (or stacked when vertical). */
export function BeforeAfter({ src, alt, position = 50, vertical = false }: Props) {
  const [pos, setPos] = useState(position);
  const bg = `url(${src})`;

  if (vertical) {
    return (
      <div className="compare relative overflow-hidden bg-navy">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: bg, backgroundSize: "100% 200%" }}
          role="img"
          aria-label={`${alt}, antes`}
        />
        <div className="absolute inset-x-0 bottom-0 overflow-hidden" style={{ height: `${100 - pos}%` }}>
          <div
            className="absolute inset-x-0 bottom-0 bg-cover bg-bottom"
            style={{ backgroundImage: bg, backgroundSize: "100% 200%", height: `${10000 / (100 - pos)}%` }}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 h-px bg-rose" style={{ top: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-rose bg-navy/80 text-rose">
            ↕
          </span>
        </div>
        <span className="absolute left-5 top-5 text-[0.6rem] uppercase tracking-[0.24em] text-cream">Antes</span>
        <span className="absolute bottom-5 left-5 text-[0.6rem] uppercase tracking-[0.24em] text-cream">
          Depois
        </span>
        <input
          aria-label={`Comparar antes e depois: ${alt}`}
          type="range"
          min="4"
          max="96"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="vertical-slider absolute inset-0 h-full w-full cursor-ns-resize opacity-0"
        />
      </div>
    );
  }

  return (
    <div className="compare relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 bg-cover bg-left"
        style={{ backgroundImage: bg, backgroundSize: "200% 100%" }}
        role="img"
        aria-label={`${alt}, antes`}
      />
      <div className="absolute inset-y-0 right-0 overflow-hidden" style={{ width: `${100 - pos}%` }}>
        <div
          className="absolute inset-y-0 right-0 bg-cover bg-right"
          style={{ backgroundImage: bg, backgroundSize: "200% 100%", width: `${10000 / (100 - pos)}%` }}
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-px bg-rose" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-rose bg-navy/80 text-rose">
          ↔
        </span>
      </div>
      <span className="absolute bottom-5 left-5 text-[0.6rem] uppercase tracking-[0.24em] text-cream">Antes</span>
      <span className="absolute bottom-5 right-5 text-[0.6rem] uppercase tracking-[0.24em] text-cream">
        Depois
      </span>
      <input
        aria-label={`Comparar antes e depois: ${alt}`}
        type="range"
        min="4"
        max="96"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
