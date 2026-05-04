export default function VaschettaTakeAway() {
  return (
    <div
      className="aspect-square rounded-[20px] flex items-center justify-center p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
      style={{
        background: "linear-gradient(180deg, #efe7d6 0%, #ede4d2 100%)",
        border: "1px solid rgba(26,26,26,0.08)",
      }}
    >
      <div
        className="aspect-square w-full rounded-full flex items-center justify-center relative"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #fdf9ee 0%, #f5efe4 55%, #e3d9c4 100%)",
          boxShadow:
            "inset 0 6px 14px rgba(193,96,58,0.08), inset 0 -6px 14px rgba(26,26,26,0.06), 0 4px 16px -4px rgba(26,26,26,0.1)",
        }}
      >
        <div
          className="aspect-square w-[88%] rounded-full flex flex-col items-center justify-center text-center px-6"
          style={{
            border: "1px dashed rgba(26,26,26,0.18)",
          }}
        >
          <p className="font-display text-[clamp(28px,6vw,52px)] leading-[0.85] tracking-[-0.045em]">
            <span className="block">TANTO</span>
            <span className="block text-terracotta">BONO</span>
          </p>
          <span className="h-px w-10 bg-inchiostro/30 my-3" />
          <p className="label text-[8px] text-inchiostro/60">
            Gelato — Fatto bene
          </p>
          <p className="label text-[9px] text-terracotta mt-5">500g</p>
        </div>
      </div>
    </div>
  );
}
