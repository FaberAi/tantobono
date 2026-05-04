import VaschettaPozzetto from "./mockups/VaschettaPozzetto";
import VaschettaTakeAway from "./mockups/VaschettaTakeAway";
import CoppettaMonodose from "./mockups/CoppettaMonodose";
import CartelloVetrina from "./mockups/CartelloVetrina";
import PostIG from "./mockups/PostIG";

export default function Packaging() {
  return (
    <section id="packaging" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="mb-20">
          <p className="label text-inchiostro/60 mb-6">Pozzetto 5L</p>
          <VaschettaPozzetto />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div>
            <p className="label text-inchiostro/60 mb-4">Take-away 500g</p>
            <VaschettaTakeAway />
          </div>
          <div>
            <p className="label text-inchiostro/60 mb-4">Monodose</p>
            <CoppettaMonodose />
          </div>
        </div>

        <div className="mb-20">
          <p className="label text-inchiostro/60 mb-6">Cartello vetrina</p>
          <CartelloVetrina />
        </div>

        <div>
          <p className="label text-inchiostro/60 mb-6">Instagram</p>
          <PostIG />
        </div>
      </div>
    </section>
  );
}
