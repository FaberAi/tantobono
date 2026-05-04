import Image from "next/image";

export default function Prodotto() {
  return (
    <section className="bg-inchiostro text-crema py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16 items-end">
          <h2 className="font-display text-4xl md:text-7xl leading-[0.92]">
            Niente coloranti.
            <br />
            <span className="text-terracotta">Niente aromi finti.</span>
          </h2>
          <p className="font-quote italic text-lg md:text-xl text-crema/70 leading-snug max-w-md">
            Solo quello che serve a fare il gelato. E nient&apos;altro. Latte
            vero, frutta di stagione, mani che sanno quello che fanno.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12 relative aspect-[16/9] overflow-hidden rounded-md group">
            <Image
              src="/gelato-vaschette.jpg"
              alt="Vaschette di gelato artigianale al pozzetto"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div className="col-span-12 md:col-span-8 relative aspect-[16/10] overflow-hidden rounded-md group">
            <Image
              src="/gelato-nocciola.jpg"
              alt="Vaschetta di gelato alla nocciola con granella"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div className="col-span-12 md:col-span-4 relative aspect-[3/4] md:aspect-auto md:min-h-[400px] overflow-hidden rounded-md group">
            <Image
              src="/gelato-palline.jpg"
              alt="Palline di gelato al pistacchio e alla crema con frutta secca"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
