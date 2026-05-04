export default function VaschettaPozzetto() {
  return (
    <div className="relative">
      <div
        className="rounded-[28px] p-10 md:p-14 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)]"
        style={{
          background:
            "linear-gradient(180deg, #f9f3e8 0%, #f5efe4 50%, #ebe2d0 100%)",
          border: "1px solid rgba(26,26,26,0.08)",
        }}
      >
        {/* rim metallico interno */}
        <div
          className="rounded-[18px] p-8 md:p-12 relative"
          style={{
            background:
              "radial-gradient(ellipse at center top, #fdf9ee 0%, #f5efe4 60%, #ede4d2 100%)",
            boxShadow:
              "inset 0 2px 8px rgba(193,96,58,0.08), inset 0 -2px 8px rgba(26,26,26,0.04)",
          }}
        >
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center">
            <div>
              <p className="font-display text-[clamp(48px,9vw,108px)] leading-[0.85] tracking-[-0.045em]">
                <span className="block text-inchiostro">TANTO</span>
                <span className="block text-terracotta">BONO</span>
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-10 bg-inchiostro/40" />
                <span className="label text-[10px] text-inchiostro/60">
                  Gelato — Fatto bene
                </span>
              </div>
            </div>

            <div className="text-right md:border-l md:border-line md:pl-10">
              <p className="font-display text-3xl md:text-4xl tracking-[-0.02em] leading-tight">
                Pistacchio
              </p>
              <p className="label text-[10px] text-inchiostro/60 mt-3">
                Bronte DOP
              </p>
              <p className="font-quote italic text-sm text-inchiostro/50 mt-6">
                solo Bronte.
                <br />
                niente scuse.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-inchiostro/5 border border-line">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  5L
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[12px] text-inchiostro/50 mt-4 italic">
        Etichetta personalizzata per gusto · logo leggibile a 3 metri
      </p>
    </div>
  );
}
