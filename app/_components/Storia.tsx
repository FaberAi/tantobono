import Image from "next/image";

export default function Storia() {
  return (
    <section id="storia" className="bg-crema-deep py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <p className="label text-inchiostro/60 mb-12">02 — La Nostra Storia</p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
              <Image
                src="/mario.png"
                alt="Nonno Mario · Macerata, 1919"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale contrast-[1.08] brightness-[1.02]"
                priority
              />
              {/* leggerissima virata calda per non far cadere la foto sul freddo */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(193,96,58,0.06) 0%, rgba(193,96,58,0.02) 100%)",
                }}
              />
              {/* vignettatura editoriale */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 55%, rgba(26,26,26,0.22) 100%)",
                }}
              />
            </div>
            <p className="font-quote italic text-sm text-inchiostro/60 mt-4 text-center">
              Mario · Macerata, 1919
            </p>
          </div>

          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-8 leading-[0.95]">
              Nonno
              <br />
              Mario.
            </h2>

            <p className="font-quote text-xl md:text-2xl text-inchiostro-soft leading-snug mb-6">
              Mio nonno Mario era marchigiano, di Macerata. Aveva un modo tutto
              suo di giudicare le cose buone: chiudeva gli occhi un secondo e
              diceva soltanto due parole.
            </p>

            <p className="font-quote text-3xl md:text-4xl text-terracotta my-8 leading-tight">
              «È tanto bono.»
            </p>

            <p className="font-quote text-lg md:text-xl text-inchiostro-soft leading-snug mb-6">
              Era il suo modo di dire che una cosa era stata fatta con rispetto.
              E quando il nonno lo diceva, ci credevi.
            </p>

            <p className="font-quote text-lg md:text-xl text-inchiostro-soft leading-snug">
              Tanto Bono è nato per sentirgli dire ancora quella frase, ogni
              volta che apriamo una vaschetta nuova.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
