export default function Footer() {
  return (
    <footer className="bg-crema-deep py-16 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div>
            <div className="flex items-baseline gap-2 leading-none mb-3">
              <span className="font-display text-2xl tracking-[-0.04em]">
                TANTO
              </span>
              <span className="font-display text-2xl tracking-[-0.04em] text-terracotta">
                BONO
              </span>
            </div>
            <p className="font-quote italic text-sm text-inchiostro/60">
              Gelato — fatto bene.
            </p>
          </div>

          <div className="grid grid-cols-2 md:flex md:items-end gap-8 md:gap-12 text-sm">
            <div>
              <p className="label text-[10px] text-inchiostro/50 mb-2">
                Scrivici
              </p>
              <a
                href="mailto:ciao@tantobono.it"
                className="hover:text-terracotta transition-colors"
              >
                ciao@tantobono.it
              </a>
            </div>
            <div>
              <p className="label text-[10px] text-inchiostro/50 mb-2">
                Social
              </p>
              <a
                href="https://instagram.com/tantobono"
                className="hover:text-terracotta transition-colors"
              >
                @tantobono
              </a>
            </div>
            <div>
              <p className="label text-[10px] text-inchiostro/50 mb-2">Sede</p>
              <p>Bracciano (Roma)</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-inchiostro/55">
          <p>
            © {new Date().getFullYear()} Tanto Bono · un brand di Trade
            Consulting Italia s.r.l.s.
          </p>
          <p className="font-quote italic">
            «È tanto bono.» — Mario, Macerata 1919
          </p>
        </div>
      </div>
    </footer>
  );
}
