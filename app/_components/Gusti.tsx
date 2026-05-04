"use client";

import { useState } from "react";
import Vaschetta from "./Vaschetta";

type Gusto = {
  nome: string;
  nota: string;
  colore: string;
  texture?: "liscia" | "granella" | "swirl";
};

const gelati: Gusto[] = [
  { nome: "Fiordilatte", nota: "latte vero. fine.", colore: "#f5ecd3" },
  { nome: "Pistacchio", nota: "solo Bronte.", colore: "#a4b87a", texture: "granella" },
  { nome: "Cioccolato", nota: "70%. quello vero.", colore: "#5a3a26" },
  { nome: "Nocciola", nota: "Piemonte IGP.", colore: "#c8a07a", texture: "granella" },
  { nome: "Crema di Mario", nota: "edizione speciale.", colore: "#f0d99c" },
  { nome: "Stracciatella", nota: "fiordilatte e cacao.", colore: "#f0e8d0", texture: "swirl" },
  { nome: "Bacio", nota: "nocciola e cacao.", colore: "#6d4630", texture: "granella" },
  { nome: "Caffè", nota: "espresso napoletano.", colore: "#5a3a2f" },
  { nome: "Mandorla", nota: "di Avola, tostata.", colore: "#e0c89e", texture: "granella" },
  { nome: "Vaniglia", nota: "Madagascar bourbon.", colore: "#f5e9c8" },
  { nome: "Yogurt", nota: "greco. solo greco.", colore: "#f0ead6" },
  { nome: "Tiramisù", nota: "mascarpone. punto.", colore: "#a17a55", texture: "swirl" },
  { nome: "Cocco", nota: "polpa fresca.", colore: "#fbf3e0" },
  { nome: "Cannella", nota: "Ceylon. quella buona.", colore: "#b87333" },
  { nome: "Zabaione", nota: "Marsala vero.", colore: "#e9c987" },
];

const sorbetti: Gusto[] = [
  { nome: "Limone", nota: "costiera. e basta.", colore: "#f5dd5e" },
  { nome: "Fragola", nota: "solo di stagione.", colore: "#e88d99" },
  { nome: "Lampone", nota: "acido vero.", colore: "#c2425e" },
  { nome: "Pesca", nota: "tabacchiera.", colore: "#f5b681" },
  { nome: "Mora", nota: "selvatica.", colore: "#5d3658" },
  { nome: "Albicocca", nota: "vesuviana.", colore: "#e9b87f" },
  { nome: "Mango", nota: "polpa, no sciroppo.", colore: "#f5b346" },
  { nome: "Anguria", nota: "solo d'estate.", colore: "#e87878" },
  { nome: "Pera", nota: "fine ottobre.", colore: "#d8d0a8" },
  { nome: "Pompelmo rosa", nota: "amaro buono.", colore: "#e89a93" },
  { nome: "Melone", nota: "del Lazio.", colore: "#f0c896" },
  { nome: "Mela verde", nota: "smith. acida.", colore: "#bdd9a3" },
  { nome: "Frutti di bosco", nota: "misti, di bosco vero.", colore: "#7a3a4f" },
  { nome: "Visciola", nota: "marchigiana.", colore: "#9a2c3f" },
  { nome: "Cedro", nota: "calabrese.", colore: "#dde0a3" },
];

// gusto di default mostrato quando non c'è hover
const defaultGusto: Gusto = gelati.find((g) => g.nome === "Crema di Mario")!;

const ROW_H = 88; // altezza fissa di ogni riga in px
const SCROLL_SECONDS = 70; // durata del giro completo

function Riga({
  g,
  onHover,
}: {
  g: Gusto;
  onHover: (g: Gusto) => void;
}) {
  return (
    <div
      onMouseEnter={() => onHover(g)}
      className="flex items-baseline justify-between gap-3 cursor-default group transition-colors hover:bg-crema-deep/60 px-2"
      style={{ height: ROW_H }}
    >
      <span className="font-display text-xl md:text-3xl tracking-[-0.025em] leading-[1] group-hover:text-terracotta transition-colors">
        {g.nome}
      </span>
      <span className="font-quote italic text-[12px] md:text-sm text-inchiostro/55 text-right shrink-0">
        {g.nota}
      </span>
    </div>
  );
}

function Colonna({
  titolo,
  voci,
  direzione,
  onHover,
  onLeave,
}: {
  titolo: string;
  voci: Gusto[];
  direzione: "up" | "down";
  onHover: (g: Gusto) => void;
  onLeave: () => void;
}) {
  // duplico per avere loop seamless
  const loop = [...voci, ...voci];
  const totalH = ROW_H * voci.length; // altezza di una sola lista (= distanza per il giro)

  const animationName = direzione === "up" ? "tb-scroll-up" : "tb-scroll-down";

  return (
    <div className="relative">
      <div className="flex items-baseline justify-between mb-5">
        <p className="font-display text-2xl md:text-3xl tracking-[-0.03em] text-terracotta">
          {titolo}
        </p>
        <p className="label text-[10px] text-inchiostro/40">
          {voci.length} gusti
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        style={{ height: "min(70vh, 600px)" }}
        onMouseLeave={onLeave}
      >
        <div
          className="tb-track"
          style={
            {
              animation: `${animationName} ${SCROLL_SECONDS}s linear infinite`,
              ["--travel" as string]: `-${totalH}px`,
            } as React.CSSProperties
          }
        >
          {loop.map((g, i) => (
            <Riga key={`${g.nome}-${i}`} g={g} onHover={onHover} />
          ))}
        </div>

        {/* fade in cima e in fondo */}
        <div
          className="absolute inset-x-0 top-0 h-16 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(180deg, var(--crema) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(0deg, var(--crema) 0%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default function Gusti() {
  const [gusto, setGusto] = useState<Gusto>(defaultGusto);

  return (
    <section id="gusti" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-12">
          <p className="label text-inchiostro/60">04 — La Carta</p>
          <p className="label text-terracotta hidden md:block">
            ruota con le stagioni
          </p>
        </div>

        <h2 className="font-display text-4xl md:text-6xl mb-6 leading-[0.95] max-w-3xl">
          Tanti gusti.
          <br />
          <span className="text-terracotta">Niente filler.</span>
        </h2>

        <p className="max-w-xl text-[15px] text-inchiostro-soft leading-relaxed mb-14">
          Quello che non è di stagione, non lo mettiamo. Passa sopra un gusto
          per vederlo nella vaschetta.
        </p>

        {/* layout: gelati | vaschetta | sorbetti su desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(280px,360px)_1fr] gap-6 md:gap-10 items-start">
          {/* mobile: vaschetta in cima, sticky */}
          <div className="md:hidden mb-2">
            <Vaschetta
              nome={gusto.nome}
              nota={gusto.nota}
              colore={gusto.colore}
              texture={gusto.texture}
            />
          </div>

          <Colonna
            titolo="Gelati"
            voci={gelati}
            direzione="up"
            onHover={setGusto}
            onLeave={() => setGusto(defaultGusto)}
          />

          {/* desktop: vaschetta sticky al centro */}
          <div className="hidden md:block sticky top-24">
            <Vaschetta
              nome={gusto.nome}
              nota={gusto.nota}
              colore={gusto.colore}
              texture={gusto.texture}
            />
          </div>

          <Colonna
            titolo="Sorbetti"
            voci={sorbetti}
            direzione="down"
            onHover={setGusto}
            onLeave={() => setGusto(defaultGusto)}
          />
        </div>
      </div>

      {/* keyframes locali con valore --travel calcolato per ogni colonna */}
      <style>{`
        @keyframes tb-scroll-up {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(0, var(--travel), 0); }
        }
        @keyframes tb-scroll-down {
          from { transform: translate3d(0, var(--travel), 0); }
          to   { transform: translate3d(0, 0, 0); }
        }
        .tb-track {
          will-change: transform;
        }
        .tb-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
