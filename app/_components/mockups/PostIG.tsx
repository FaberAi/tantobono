const posts = [
  { gusto: "Pistacchio\ndi Bronte.", punto: "Punto." },
  { gusto: "Latte vero.", punto: "Fine." },
  { gusto: "Cioccolato\n70%.", punto: "Quello vero." },
];

export default function PostIG() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {posts.map((p, i) => {
        const dark = i === 1;
        return (
          <div
            key={i}
            className="aspect-square rounded-xl p-8 flex flex-col justify-between shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
            style={{
              background: dark
                ? "linear-gradient(180deg, #1a1a1a 0%, #0e0e0e 100%)"
                : "linear-gradient(180deg, #f5efe4 0%, #ede4d2 100%)",
              color: dark ? "#f5efe4" : "#1a1a1a",
              border: dark
                ? "1px solid rgba(193,96,58,0.18)"
                : "1px solid rgba(26,26,26,0.08)",
            }}
          >
            <p
              className="label text-[10px]"
              style={{ color: dark ? "rgba(245,239,228,0.5)" : "rgba(26,26,26,0.5)" }}
            >
              Tanto Bono
            </p>

            <div className="flex flex-col items-center text-center">
              <p className="font-quote text-[clamp(28px,4vw,40px)] leading-[1.05] whitespace-pre-line">
                «{p.gusto}
              </p>
              <p className="font-quote text-[clamp(28px,4vw,40px)] leading-[1.05] text-terracotta">
                {p.punto}»
              </p>
            </div>

            <p
              className="label text-[10px] text-center"
              style={{ color: dark ? "rgba(245,239,228,0.5)" : "rgba(26,26,26,0.5)" }}
            >
              Fatto bene
            </p>
          </div>
        );
      })}
    </div>
  );
}
