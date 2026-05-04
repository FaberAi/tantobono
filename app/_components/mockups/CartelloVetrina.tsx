const gusti = [
  { nome: "Fiordilatte", nota: "latte vero. fine." },
  { nome: "Pistacchio", nota: "solo Bronte. niente scuse." },
  { nome: "Cioccolato", nota: "70%. quello vero." },
  { nome: "Fragola", nota: "solo di stagione." },
  { nome: "Nocciola", nota: "Piemonte IGP." },
];

export default function CartelloVetrina() {
  return (
    <div
      className="rounded-2xl p-8 md:p-12 text-crema shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]"
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #0e0e0e 100%)",
        border: "1px solid rgba(193,96,58,0.15)",
      }}
    >
      <div className="flex items-baseline justify-between mb-8">
        <p className="font-display text-3xl md:text-5xl tracking-[-0.04em] text-terracotta">
          OGGI
        </p>
        <p className="label text-[10px] text-crema/40">
          Tanto Bono · gusti del giorno
        </p>
      </div>

      <div className="divide-y divide-crema/10">
        {gusti.map((g) => (
          <div
            key={g.nome}
            className="grid grid-cols-2 items-baseline gap-4 py-4 md:py-5"
          >
            <span className="font-display text-xl md:text-3xl tracking-[-0.02em]">
              {g.nome.toUpperCase()}
            </span>
            <span className="font-quote italic text-sm md:text-base text-crema/55 text-right">
              {g.nota}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
