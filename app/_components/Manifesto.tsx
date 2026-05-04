export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-36">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-quote text-[clamp(64px,12vw,160px)] text-terracotta leading-[0.88] mb-16">
          «È tanto bono.»
        </p>

        <div className="max-w-2xl mx-auto space-y-7">
          <p className="font-quote text-xl md:text-2xl text-inchiostro-soft leading-snug">
            Una frase, in dialetto, che vuol dire una cosa sola: fatto con
            rispetto.
          </p>

          <p className="font-quote text-xl md:text-2xl text-inchiostro-soft leading-snug">
            Latte vero. Frutta di stagione. Niente coloranti, niente aromi
            finti, niente promesse complicate.
          </p>

          <p className="font-quote text-xl md:text-2xl text-inchiostro-soft leading-snug">
            Solo gelato fatto come sapeva farlo lui.
          </p>
        </div>

        <div className="mt-20 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-inchiostro/30" />
          <p className="font-display text-3xl md:text-5xl text-terracotta">
            Tanto bono.
          </p>
          <span className="h-px w-16 bg-inchiostro/30" />
        </div>
      </div>
    </section>
  );
}
