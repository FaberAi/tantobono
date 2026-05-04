export default function CoppettaMonodose() {
  return (
    <div
      className="aspect-square rounded-[20px] flex items-center justify-center p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
      style={{
        background: "linear-gradient(180deg, #efe7d6 0%, #ede4d2 100%)",
        border: "1px solid rgba(26,26,26,0.08)",
      }}
    >
      <div
        className="aspect-square w-[78%] rounded-full flex items-center justify-center relative"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #2c2c2c 0%, #1a1a1a 60%, #0d0d0d 100%)",
          boxShadow:
            "inset 0 6px 14px rgba(255,255,255,0.04), inset 0 -6px 14px rgba(0,0,0,0.6), 0 4px 16px -4px rgba(0,0,0,0.4)",
        }}
      >
        <div className="aspect-square w-[82%] rounded-full border border-crema/20 flex flex-col items-center justify-center text-center px-3">
          <p className="font-display text-[clamp(20px,5vw,42px)] leading-[0.85] tracking-[-0.045em]">
            <span className="block text-crema">TANTO</span>
            <span className="block text-terracotta">BONO</span>
          </p>
          <span className="h-px w-8 bg-crema/30 my-2" />
          <p className="label text-[7px] text-crema/60">Monodose</p>
        </div>
      </div>
    </div>
  );
}
