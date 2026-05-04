export default function B2B() {
  return (
    <section
      id="b2b"
      className="bg-inchiostro text-crema py-24 md:py-36 relative overflow-hidden"
    >
      {/* halo terracotta sullo sfondo */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(193,96,58,0.5) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <p className="label text-crema/50 mb-8">Per il tuo locale</p>

        <h2 className="font-display text-4xl md:text-7xl mb-10 leading-[0.95] max-w-4xl">
          Bar, ristoranti,
          <br />
          gelaterie:
          <br />
          <span className="text-terracotta">parliamone.</span>
        </h2>

        <p className="max-w-xl text-[16px] md:text-[17px] text-crema/70 leading-relaxed mb-12">
          Tanto Bono si trova nei locali Love Me e all&apos;ingrosso per chi
          vuole un gelato fatto bene da mettere in vetrina, in coppetta, o nel
          dessert del menù. Listino e condizioni minime su richiesta.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              titolo: "Vaschetta pozzetto 5L",
              sotto: "Pronta al pozzetto. Etichetta personalizzata per gusto.",
            },
            {
              titolo: "Take-away 500g",
              sotto: "Da banco frigo. Brandizzata Tanto Bono.",
            },
            {
              titolo: "Coppetta monodose",
              sotto: "Per dessert in carta o catering.",
            },
          ].map((c) => (
            <div
              key={c.titolo}
              className="border border-crema/15 rounded-xl p-6 hover:border-terracotta/60 transition-colors"
            >
              <p className="font-display text-xl tracking-[-0.02em] mb-3">
                {c.titolo}
              </p>
              <p className="text-sm text-crema/60 leading-relaxed">{c.sotto}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <a
            href="mailto:ciao@tantobono.it?subject=Listino%20B2B%20Tanto%20Bono"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-terracotta hover:bg-terracotta-deep transition-colors font-semibold text-[15px]"
          >
            Chiedi il listino →
          </a>
          <a
            href="mailto:ciao@tantobono.it"
            className="text-[15px] text-crema/70 hover:text-crema transition-colors underline underline-offset-4"
          >
            ciao@tantobono.it
          </a>
        </div>
      </div>
    </section>
  );
}
