export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-16 md:pt-28 pb-20 md:pb-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="label text-inchiostro/60 mb-8 fade-up">
          Edizione 01 · 2026 · Gelato artigianale
        </p>

        <h1 className="font-display text-[22vw] md:text-[200px] leading-[0.85] fade-up">
          <span className="block">TANTO</span>
          <span className="block text-terracotta">BONO</span>
        </h1>

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8 fade-up-delay-1">
          <div className="max-w-md">
            <p className="label text-inchiostro/60 mb-3">Tagline</p>
            <p className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
              Gelato — fatto bene.
            </p>
          </div>
          <div className="max-w-sm text-[15px] leading-relaxed text-inchiostro-soft">
            Latte vero. Frutta di stagione. Niente coloranti, niente aromi
            finti, niente promesse complicate. Solo gelato fatto come si deve.
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-28 border-y border-line py-5 overflow-hidden fade-up-delay-2">
        <div className="ticker flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, group) => (
            <div key={group} className="flex shrink-0">
              {[
                "latte vero",
                "niente coloranti",
                "solo di stagione",
                "pistacchio di bronte",
                "nocciola piemonte IGP",
                "cioccolato 70%",
                "fatto bene",
              ].map((word, i) => (
                <span
                  key={`${group}-${i}`}
                  className="font-display text-[clamp(28px,4vw,56px)] tracking-[-0.03em] mx-8 text-inchiostro flex items-center gap-8"
                >
                  {word}
                  <span className="text-terracotta text-[0.7em]">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
