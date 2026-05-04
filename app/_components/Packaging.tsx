import VaschettaPozzetto from "./mockups/VaschettaPozzetto";
import VaschettaTakeAway from "./mockups/VaschettaTakeAway";
import CoppettaMonodose from "./mockups/CoppettaMonodose";
import CartelloVetrina from "./mockups/CartelloVetrina";
import PostIG from "./mockups/PostIG";

export default function Packaging() {
  return (
    <section id="packaging" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <p className="label text-inchiostro/60 mb-8">08 — Applicazioni</p>

        <h2 className="font-display text-4xl md:text-6xl mb-6 leading-[0.95] max-w-4xl">
          Il brand vive sui
          <br />
          <span className="text-terracotta">contenitori.</span>
        </h2>

        <p className="max-w-xl text-[15px] text-inchiostro-soft leading-relaxed mb-16">
          Senza punto vendita fisico, il packaging è il primo punto di contatto.
          Deve essere riconoscibile a tre metri di distanza in mezzo ad altri
          brand.
        </p>

        {/* POZZETTO 5L */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <p className="label text-inchiostro/60">
              Vaschetta pozzetto 5L · B2B
            </p>
            <p className="font-quote italic text-sm text-inchiostro/50">
              per bar, ristoranti, gelaterie
            </p>
          </div>
          <VaschettaPozzetto />
        </div>

        {/* TAKE-AWAY + MONODOSE */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div>
            <p className="label text-inchiostro/60 mb-4">Take-away · 500g</p>
            <VaschettaTakeAway />
          </div>
          <div>
            <p className="label text-inchiostro/60 mb-4">Coppetta monodose</p>
            <CoppettaMonodose />
          </div>
        </div>

        {/* CARTELLO VETRINA */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <p className="label text-inchiostro/60">
              Cartello vetrina · gusti del giorno
            </p>
            <p className="font-quote italic text-sm text-inchiostro/50">
              da affiggere accanto al pozzetto
            </p>
          </div>
          <CartelloVetrina />
        </div>

        {/* POST IG */}
        <div>
          <div className="flex items-baseline justify-between mb-6">
            <p className="label text-inchiostro/60">
              Post Instagram · format ricorrente
            </p>
            <p className="font-quote italic text-sm text-inchiostro/50">
              cambia il gusto, la struttura resta
            </p>
          </div>
          <PostIG />
        </div>
      </div>
    </section>
  );
}
