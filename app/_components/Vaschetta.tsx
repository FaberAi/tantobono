type VaschettaProps = {
  nome: string;
  nota: string;
  colore: string;
  texture?: "liscia" | "granella" | "swirl";
};

export default function Vaschetta({
  nome,
  nota,
  colore,
  texture = "liscia",
}: VaschettaProps) {
  return (
    <div className="relative w-full aspect-[3/4] flex flex-col items-center justify-center px-6 select-none">
      {/* etichetta sopra */}
      <div className="text-center mb-6 md:mb-8">
        <p className="font-display text-3xl md:text-5xl tracking-[-0.03em] leading-none">
          {nome}
        </p>
        <p className="font-quote italic text-sm md:text-base text-inchiostro/55 mt-3">
          {nota}
        </p>
      </div>

      {/* vaschetta vista dall'alto */}
      <div
        className="relative w-full max-w-[320px] aspect-[4/3] rounded-[14px] p-3 md:p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
        style={{
          background:
            "linear-gradient(145deg, #d9d4c8 0%, #c4bdac 50%, #a89f8c 100%)",
        }}
      >
        {/* rim metallico interno */}
        <div
          className="relative h-full w-full rounded-[8px] overflow-hidden"
          style={{
            boxShadow:
              "inset 0 4px 8px rgba(0,0,0,0.18), inset 0 -2px 4px rgba(255,255,255,0.15)",
          }}
        >
          {/* gelato vero e proprio */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              background: `radial-gradient(ellipse at 30% 25%, ${lighten(
                colore,
                15
              )} 0%, ${colore} 40%, ${darken(colore, 10)} 100%)`,
            }}
          />

          {/* swirl pattern (curve di "movimento" del gelato) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 150"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="shine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor="#ffffff"
                  stopOpacity="0.35"
                />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* riflesso */}
            <rect width="200" height="150" fill="url(#shine)" />

            {/* swirl/curve del gelato */}
            <path
              d="M 20 60 Q 60 30, 100 55 T 180 50"
              stroke={darken(colore, 25)}
              strokeWidth="1.2"
              strokeOpacity="0.35"
              fill="none"
            />
            <path
              d="M 10 90 Q 50 70, 100 85 T 190 80"
              stroke={darken(colore, 25)}
              strokeWidth="1.2"
              strokeOpacity="0.3"
              fill="none"
            />
            <path
              d="M 25 115 Q 70 95, 110 108 T 185 112"
              stroke={darken(colore, 25)}
              strokeWidth="1"
              strokeOpacity="0.25"
              fill="none"
            />

            {/* granella per gusti che la prevedono */}
            {texture === "granella" && (
              <g fill={darken(colore, 35)} opacity="0.55">
                {Array.from({ length: 24 }).map((_, i) => {
                  const x = 15 + ((i * 37) % 170);
                  const y = 18 + ((i * 23) % 120);
                  return <circle key={i} cx={x} cy={y} r="1.4" />;
                })}
              </g>
            )}

            {/* swirl più visibile per gusti misti */}
            {texture === "swirl" && (
              <path
                d="M 30 40 Q 80 80, 120 50 Q 160 20, 180 70 Q 140 110, 90 95 Q 50 80, 30 40 Z"
                fill={darken(colore, 30)}
                fillOpacity="0.18"
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

// utility per schiarire/scurire un esadecimale
function shift(hex: string, amt: number): string {
  const h = hex.replace("#", "");
  const num = parseInt(h, 16);
  let r = (num >> 16) + amt;
  let g = ((num >> 8) & 0x00ff) + amt;
  let b = (num & 0x0000ff) + amt;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

function lighten(hex: string, percent: number) {
  return shift(hex, Math.round((percent / 100) * 255));
}

function darken(hex: string, percent: number) {
  return shift(hex, -Math.round((percent / 100) * 255));
}
