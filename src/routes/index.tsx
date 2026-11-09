import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Instagram,
  MapPin,
  Menu,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/site/BrandMark";
import { Opening } from "@/components/site/Opening";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import {
  EXPERIENCE_STEPS,
  INSTAGRAM_URL,
  MAPS_URL,
  NAV_LINKS,
  TESTIMONIALS,
  WHATSAPP_URL,
} from "@/lib/site";

import antesDepoisFrontal from "@/assets/antes-depois-frontal.jpeg";
import antesDepoisHarmonizacao from "@/assets/antes-depois-harmonizacao.jpeg";
import antesDepoisPerfil from "@/assets/antes-depois-perfil.jpeg";
import draRaquel from "@/assets/dra-raquel-consultorio.jpeg";
import labios from "@/assets/labios.jpeg";
import procedimentoBotox from "@/assets/procedimento-botox.jpeg";
import procedimentoFacial from "@/assets/procedimento-facial.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Raquel Camargo | Estética em Vila Mariana" },
      {
        name: "description",
        content:
          "Procedimentos estéticos personalizados, naturais e harmônicos com a Dra. Raquel Camargo em Vila Mariana, São Paulo.",
      },
      { property: "og:title", content: "Dra. Raquel Camargo | Biomédica Esteta" },
      {
        property: "og:description",
        content: "Realce sua beleza e preserve sua essência com procedimentos personalizados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TREATMENTS = [
  {
    category: "Corporal",
    title: "Harmonização Corporal",
    description:
      "Tratamentos que valorizam suas curvas naturais, com foco em contorno, firmeza e bem-estar.",
    icon: Heart,
  },
  {
    category: "Facial",
    title: "Rejuvenescimento Facial",
    description:
      "Protocolos com toxina botulínica, bioestimuladores e skinbooster para uma pele mais firme, hidratada e luminosa.",
    icon: Sparkles,
  },
  {
    category: "Tecnologia",
    title: "Tratamentos a Laser",
    description:
      "Equipamentos de última geração para manchas, textura da pele e rejuvenescimento com segurança.",
    icon: Sun,
  },
];

const ext = { target: "_blank", rel: "noreferrer" } as const;

function Index() {
  const [showOpening, setShowOpening] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const portraitRef = useRef<HTMLDivElement>(null);

  return (
    <main className="overflow-hidden bg-background">
      {showOpening && <Opening onDone={() => setShowOpening(false)} />}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-navy/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <BrandMark compact />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            {...ext}
            className="hidden border-b border-rose pb-1 text-[0.65rem] uppercase tracking-[0.18em] text-cream md:inline-flex"
          >
            Agendar avaliação
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="text-rose md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-cream/10 bg-navy px-6 py-7 md:hidden">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-cream/10 py-4 font-display text-2xl text-cream"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Início */}
      <section id="inicio" className="relative min-h-[94svh] bg-navy pt-20 text-cream">
        <div className="line-art pointer-events-none absolute inset-0 opacity-30" />
        <div className="mx-auto grid min-h-[calc(94svh-5rem)] max-w-[1440px] items-center gap-10 px-5 py-12 md:grid-cols-[0.92fr_1.08fr] md:px-10 md:py-16">
          <div className="relative z-10 pt-6 md:pt-0">
            <p className="eyebrow">Estética avançada • São Paulo</p>
            <h1 className="mt-7 max-w-3xl font-display text-[clamp(3.4rem,7vw,7.7rem)] leading-[0.84]">
              Realce sua <em className="font-light text-rose">beleza.</em>
              <br />
              Preserve sua essência.
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-cream/68 md:text-base">
              Procedimentos estéticos personalizados para valorizar seus traços e proporcionar
              resultados naturais e harmônicos.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={WHATSAPP_URL} {...ext} className="cta-primary">
                Agendar avaliação <ArrowUpRight size={16} />
              </a>
              <a href="#procedimentos" className="cta-secondary">
                Conhecer procedimentos
              </a>
            </div>
          </div>

          <div
            ref={portraitRef}
            onMouseMove={(e) => {
              const el = portraitRef.current;
              if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
              const r = el.getBoundingClientRect();
              const x = (e.clientX - r.left) / r.width - 0.5;
              const y = (e.clientY - r.top) / r.height - 0.5;
              el.style.setProperty("--rx", `${y * -3}deg`);
              el.style.setProperty("--ry", `${x * 4}deg`);
            }}
            onMouseLeave={() => {
              portraitRef.current?.style.setProperty("--rx", "0deg");
              portraitRef.current?.style.setProperty("--ry", "0deg");
            }}
            className="portrait-wrap relative mx-auto w-full max-w-[650px] self-end"
          >
            <div className="portrait-halo" />
            <div className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-t-[48%] border border-rose/25">
              <img
                src={draRaquel}
                alt="Dra. Raquel Camargo em seu consultório"
                className="h-full w-full object-cover object-[48%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
            </div>
            <p className="absolute bottom-5 left-5 font-display text-2xl md:bottom-8 md:left-8">
              Dra. Raquel Camargo
            </p>
            <span className="absolute -right-4 top-1/3 h-24 w-24 rounded-full border border-rose/45 md:h-36 md:w-36" />
          </div>
        </div>
        <a
          href="#manifesto"
          aria-label="Continuar"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-rose"
        >
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </section>

      {/* Manifesto */}
      <section
        id="manifesto"
        className="relative grid min-h-[72svh] place-items-center bg-navy px-5 py-24 text-center text-cream"
      >
        <div className="absolute left-1/2 top-0 h-24 w-px bg-gradient-to-b from-rose/0 to-rose/60" />
        <div>
          <p className="eyebrow">Manifesto</p>
          <h2 className="mt-8 font-display text-[clamp(3.2rem,7vw,7rem)] leading-none">
            <span>Cuidar</span> <span className="text-rose">da pele</span>
            <br />
            <span>é viver bem.</span>
          </h2>
          <p className="mt-8 text-[0.64rem] uppercase tracking-[0.28em] text-cream/55">
            Biomédica Esteta • CRBM 48767
          </p>
        </div>
      </section>

      {/* Procedimentos */}
      <section id="procedimentos" className="bg-cream py-24 text-navy md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-navy/55">01 — Procedimentos</p>
              <h2 className="section-title mt-5">
                Precisão que
                <br />
                <em>valoriza.</em>
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-6 text-navy/65 md:block">
              Cada escolha parte de uma avaliação cuidadosa e respeita a anatomia de cada rosto.
            </p>
          </div>

          <div className="space-y-5 md:space-y-8">
            <article className="procedure group grid min-h-[72svh] overflow-hidden bg-navy text-cream md:grid-cols-[1.2fr_.8fr]">
              <div className="overflow-hidden">
                <img
                  src={procedimentoBotox}
                  alt="Aplicação estética realizada pela Dra. Raquel"
                  className="procedure-image"
                />
              </div>
              <div className="flex flex-col justify-between p-8 md:p-12">
                <span className="eyebrow">01 — Expressão</span>
                <div>
                  <h3 className="font-display text-5xl md:text-7xl">
                    Toxina
                    <br />
                    Botulínica
                  </h3>
                  <p className="mt-6 max-w-sm text-sm leading-7 text-cream/65">
                    Suavização de linhas de expressão com planejamento individualizado.
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  {...ext}
                  className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-rose"
                >
                  Saiba mais <ArrowUpRight size={15} />
                </a>
              </div>
            </article>

            <article className="procedure group relative min-h-[78svh] overflow-hidden bg-navy text-cream">
              <img
                src={labios}
                alt="Resultado natural de harmonização labial"
                className="procedure-image absolute inset-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/25 to-transparent" />
              <div className="relative flex min-h-[78svh] max-w-xl flex-col justify-between p-8 md:p-14">
                <span className="eyebrow">02 — Proporção</span>
                <div>
                  <h3 className="font-display text-5xl md:text-7xl">
                    Harmonização
                    <br />
                    Labial
                  </h3>
                  <p className="mt-6 font-display text-2xl italic text-rose">
                    Naturalidade em primeiro lugar.
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  {...ext}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-rose"
                >
                  Conhecer <ArrowUpRight size={15} />
                </a>
              </div>
            </article>

            <article className="procedure group grid min-h-[72svh] overflow-hidden bg-nude/35 md:grid-cols-[.75fr_1.25fr]">
              <div className="flex flex-col justify-between p-8 md:p-12">
                <span className="eyebrow text-navy/55">03 — Equilíbrio</span>
                <div>
                  <h3 className="font-display text-5xl md:text-7xl">
                    Harmonização
                    <br />
                    Facial
                  </h3>
                  <p className="mt-6 max-w-sm text-sm leading-7 text-navy/65">
                    Estratégia, delicadeza e respeito à identidade em cada detalhe.
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  {...ext}
                  className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-navy"
                >
                  Agendar avaliação <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="overflow-hidden">
                <img
                  src={procedimentoFacial}
                  alt="Procedimento de harmonização facial"
                  className="procedure-image"
                  loading="lazy"
                />
              </div>
            </article>
          </div>

          <div className="mt-20 border-y border-navy/15 py-12">
            <p className="eyebrow text-navy/50">Procedimentos</p>
            <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-3">
              {TREATMENTS.map(({ category, title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="treatment-card flex flex-col overflow-hidden rounded-lg bg-card"
                >
                  <div className="treatment-icon-panel relative grid aspect-[1.45] shrink-0 place-items-center text-nude">
                    <Icon size={48} strokeWidth={1.3} aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col items-start p-7 md:p-8">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {category}
                    </p>
                    <h3 className="mt-4 font-display text-[2rem] leading-tight text-navy">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
                    <Button
                      asChild
                      variant="link"
                      className="mt-auto h-auto px-0 pt-7 text-xs uppercase tracking-[0.1em] text-navy no-underline hover:no-underline"
                    >
                      <a href={WHATSAPP_URL} {...ext} aria-label={`Saiba mais sobre ${title}`}>
                        Saiba mais <ArrowRight aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados" className="bg-navy py-24 text-cream md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="eyebrow">02 — Antes &amp; depois</p>
          <h2 className="section-title mt-5">
            Detalhes que fazem
            <br />
            <em className="text-rose">diferença.</em>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-cream/60">
            Resultados que respeitam a individualidade de cada rosto. Arraste a linha para observar.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <BeforeAfter src={antesDepoisFrontal} alt="Resultado facial frontal" />
            <BeforeAfter src={antesDepoisHarmonizacao} alt="Resultado de harmonização de perfil" />
            <div className="md:col-span-2">
              <BeforeAfter src={antesDepoisPerfil} alt="Resultado em nariz e lábios" vertical />
            </div>
          </div>
          <p className="mt-6 text-[0.6rem] leading-5 tracking-wide text-cream/45">
            Cada organismo responde de forma individual. As imagens apresentam casos reais e não
            constituem promessa de resultado.
          </p>
        </div>
      </section>

      {/* A doutora */}
      <section id="doutora" className="bg-cream py-24 text-navy md:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 md:grid-cols-2 md:px-10">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={draRaquel}
                alt="Dra. Raquel Camargo no consultório"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="absolute -bottom-5 -right-3 h-24 w-24 rounded-full border border-rose md:h-36 md:w-36" />
          </div>
          <div className="md:pl-12">
            <p className="eyebrow text-navy/50">03 — A profissional</p>
            <h2 className="mt-7 font-display text-[clamp(4.2rem,8vw,8rem)] leading-[0.74]">
              Dra.
              <br />
              <em className="text-rose">Raquel</em>
              <br />
              Camargo
            </h2>
            <div className="mt-12 border-t border-navy/15 pt-8">
              <p className="text-xs uppercase tracking-[0.2em]">Biomédica Esteta • CRBM 48767</p>
              <p className="mt-7 max-w-xl text-sm leading-7 text-navy/65">
                Especializada em estética e procedimentos voltados à valorização da beleza de forma
                personalizada, respeitando as características e objetivos de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O espaço */}
      <section id="espaco" className="bg-cream pb-24 text-navy md:pb-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="eyebrow text-navy/50">04 — O espaço</p>
          <h2 className="section-title mt-5 mb-12">
            Seu momento
            <br />
            <em>começa aqui.</em>
          </h2>
          <div className="space-frame">
            <img
              src={draRaquel}
              alt="Consultório da Dra. Raquel Camargo em Vila Mariana"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-cream/90 px-4 py-3 text-[0.62rem] uppercase tracking-[0.18em] backdrop-blur-md">
              <MapPin size={14} /> Vila Mariana — São Paulo
            </div>
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section className="bg-cream py-24 text-navy md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="eyebrow text-navy/50">05 — Experiência</p>
          <h2 className="section-title mt-5">
            Mais do que um procedimento.
            <br />
            <em>Uma experiência.</em>
          </h2>
          <div className="mt-16 grid border-t border-navy/20 md:grid-cols-3">
            {EXPERIENCE_STEPS.map(([n, title, text]) => (
              <article
                key={n}
                className="border-b border-navy/20 py-10 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="text-xs text-rose">{n}</span>
                <h3 className="mt-12 font-display text-3xl">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-navy/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Relatos */}
      <section className="relative overflow-hidden bg-nude/35 py-24 text-navy md:py-32">
        <div className="brand-ghost">R</div>
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="eyebrow text-navy/50">06 — Relatos</p>
          <h2 className="section-title mt-5">
            O cuidado também
            <br />
            <em>se sente.</em>
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <article key={t.author} className={`feedback-card ${i === 1 ? "md:translate-y-8" : ""}`}>
                <span className="font-display text-5xl text-rose">“</span>
                <p className="mt-8 text-sm leading-7 text-navy/70">{t.text}</p>
                <div className="mt-8 border-t border-navy/10 pt-5">
                  <p className="font-display text-xl">{t.author}</p>
                  <span className="mt-2 block text-xs tracking-[0.25em] text-rose">★★★★★</span>
                </div>
              </article>
            ))}
          </div>
          <a
            href={MAPS_URL}
            {...ext}
            className="mt-10 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-navy/60"
          >
            Avaliações publicadas no Google <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-cream py-24 text-navy md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="eyebrow text-navy/50">07 — Instagram</p>
              <h2 className="mt-5 font-display text-5xl md:text-7xl">@dra_raquelcamargo</h2>
            </div>
            <a href={INSTAGRAM_URL} {...ext} className="cta-secondary border-navy text-navy">
              Acompanhar <Instagram size={16} />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-4">
            {[procedimentoBotox, labios, procedimentoFacial, antesDepoisFrontal].map((src, i) => (
              <a key={src} href={INSTAGRAM_URL} {...ext} className="aspect-square overflow-hidden">
                <img
                  src={src}
                  alt={`Publicação de estética ${i + 1}`}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="relative grid min-h-[76svh] place-items-center overflow-hidden bg-navy px-5 py-24 text-center text-cream">
        <div className="line-art pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative">
          <BrandMark />
          <h2 className="mt-12 font-display text-[clamp(3.4rem,7vw,7rem)] leading-[0.88]">
            Seu rosto.
            <br />
            <span className="text-rose">Sua essência.</span>
            <br />
            Seu melhor momento.
          </h2>
          <a
            href={WHATSAPP_URL}
            {...ext}
            className="cta-primary mx-auto mt-12 w-full max-w-sm justify-center"
          >
            Agendar avaliação <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <footer className="bg-navy px-5 py-12 text-cream md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 border-t border-cream/10 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl">Dra. Raquel Camargo</p>
            <p className="mt-3 text-xs leading-6 text-cream/50">
              Biomédica Esteta • CRBM 48767
              <br />
              Vila Mariana — São Paulo
              <br />
              +55 11 99244-2685
            </p>
          </div>
          <div className="flex gap-6 text-[0.65rem] uppercase tracking-[0.18em]">
            <a href={INSTAGRAM_URL} {...ext}>
              Instagram
            </a>
            <a href={WHATSAPP_URL} {...ext}>
              WhatsApp
            </a>
          </div>
          <p className="text-[0.6rem] text-cream/35">
            © {new Date().getFullYear()} Dra. Raquel Camargo
          </p>
        </div>
      </footer>

      <Button
        asChild
        size="icon"
        className="whatsapp-floating fixed bottom-6 right-5 z-[60] h-14 w-14 rounded-full md:bottom-8 md:right-8"
        title="Falar com a Dra. Raquel pelo WhatsApp"
      >
        <a href={WHATSAPP_URL} {...ext} aria-label="Falar pelo WhatsApp">
          <svg viewBox="0 0 24 24" className="!size-8" fill="currentColor" aria-hidden="true">
            <path d="M20.5 3.5A11.9 11.9 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.970c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.97 11.97 0 0 0 5.84 1.49h.01C18.65 23.86 24 18.49 24 11.9a11.85 11.850 0 0 0-3.5-8.4ZM12.05 21.84a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.89 9.89 0 0 1-1.52-5.290c0-5.48 4.46-9.94 9.95-9.94a9.86 9.86 0 0 1 7.03 2.91 9.88 9.88 0 0 1 2.9 7.03c0 5.48-4.46 9.87-10.02 9.87Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.05-.17-.3-.02-.46.13-.6l.45-.52c.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.220-.24-.58-.49-.5-.67-.51H7.9c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.52.71.3 1.26.48 1.690.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
          </svg>
        </a>
      </Button>
    </main>
  );
}
