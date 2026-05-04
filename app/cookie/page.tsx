import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Tanto Bono utilizza esclusivamente cookie tecnici. Niente profilazione, niente tracker di terze parti.",
  robots: { index: true, follow: true },
};

const ULTIMO_AGGIORNAMENTO = "4 maggio 2026";

export default function CookiePage() {
  return (
    <>
      <main className="min-h-screen bg-crema text-inchiostro">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
          <Link
            href="/"
            className="label text-[10px] text-inchiostro/55 hover:text-terracotta transition-colors"
          >
            ← Tanto Bono
          </Link>

          <h1 className="font-display text-4xl md:text-5xl mt-8 mb-4">
            Cookie Policy
          </h1>
          <p className="font-quote italic text-inchiostro/65 mb-12">
            Ultimo aggiornamento: {ULTIMO_AGGIORNAMENTO}
          </p>

          <div className="space-y-10 text-[15px] leading-relaxed text-inchiostro/85">
            <section>
              <p>
                <strong>tantobono.it</strong> non utilizza cookie di
                profilazione né strumenti di analisi che richiedano consenso.
                Nessun dato di navigazione viene condiviso con terze parti
                per finalità pubblicitarie o di tracciamento.
              </p>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Cookie tecnici
              </h2>
              <p>
                Possono essere installati cookie strettamente necessari al
                funzionamento del sito (ad esempio per gestire le preferenze
                di sessione o la sicurezza). Ai sensi dell'art. 122 del
                Codice Privacy, per questi cookie non è richiesto il consenso
                preventivo dell'utente.
              </p>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Cookie di terze parti
              </h2>
              <p>
                Nessuno. Non sono presenti cookie analitici, pubblicitari o
                di social network. I caratteri tipografici sono ospitati
                direttamente sui nostri server, senza chiamate a servizi
                esterni.
              </p>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Come gestire i cookie
              </h2>
              <p>
                Puoi disabilitare o eliminare in qualsiasi momento i cookie
                dal tuo browser tramite le impostazioni dedicate. La
                disattivazione dei cookie tecnici potrebbe limitare alcune
                funzionalità del sito.
              </p>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Riferimenti
              </h2>
              <p>
                Per il trattamento generale dei dati personali consulta la{" "}
                <Link
                  href="/privacy"
                  className="text-terracotta hover:text-terracotta-deep underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                . Per qualsiasi richiesta scrivi a{" "}
                <a
                  href="mailto:ciao@tantobono.it"
                  className="text-terracotta hover:text-terracotta-deep underline underline-offset-4"
                >
                  ciao@tantobono.it
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
