export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-crema/80 border-b border-line-soft">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 leading-none">
          <span className="font-display text-[18px] tracking-[-0.04em]">
            TANTO
          </span>
          <span className="font-display text-[18px] tracking-[-0.04em] text-terracotta">
            BONO
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium">
          <a href="#storia" className="hover:text-terracotta transition-colors">
            Storia
          </a>
          <a href="#gusti" className="hover:text-terracotta transition-colors">
            Gusti
          </a>
          <a
            href="#packaging"
            className="hover:text-terracotta transition-colors"
          >
            Packaging
          </a>
          <a
            href="#b2b"
            className="px-4 py-2 bg-inchiostro text-crema rounded-full hover:bg-terracotta transition-colors"
          >
            Per il tuo locale
          </a>
        </nav>
        <a
          href="#b2b"
          className="md:hidden text-[12px] font-semibold uppercase tracking-[0.18em] text-terracotta"
        >
          B2B →
        </a>
      </div>
    </header>
  );
}
