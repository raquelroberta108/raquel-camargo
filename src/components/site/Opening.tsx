import { useEffect } from "react";

export function Opening({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = window.setTimeout(onDone, 3300);
    return () => window.clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className="opening fixed inset-0 z-[100] grid place-items-center bg-navy"
      aria-label="Apresentação da marca"
    >
      <button
        type="button"
        onClick={onDone}
        className="absolute right-6 top-6 text-[0.62rem] uppercase tracking-[0.24em] text-cream/55 transition hover:text-cream"
      >
        Pular
      </button>
      <div className="text-center">
        <svg className="mx-auto h-40 w-52 overflow-visible" viewBox="0 0 220 170" aria-hidden="true">
          <path
            className="opening-line"
            d="M28 120 C47 62 75 25 112 33 C149 40 153 80 134 101 C119 118 97 112 96 88 C95 63 120 52 151 49 C173 46 190 31 197 18 M70 36 L70 135 M70 38 C116 31 137 42 136 67 C135 91 111 102 72 96 M104 96 L148 137"
          />
        </svg>
        <div className="opening-title mt-2">
          <p className="font-display text-3xl text-cream">Dra. Raquel Camargo</p>
          <p className="mt-2 text-[0.62rem] uppercase tracking-[0.38em] text-rose">
            Biomédica Esteta
          </p>
        </div>
      </div>
    </div>
  );
}
