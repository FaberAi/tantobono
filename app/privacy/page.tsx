import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
  robots: { index: true, follow: true },
};

const ULTIMO_AGGIORNAMENTO = "4 maggio 2026";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="font-quote italic text-inchiostro/65 mb-12">
            Ultimo aggiornamento: {ULTIMO_AGGIORNAMENTO}
          </p>

          <div className="space-y-10 text-[15px] leading-relaxed text-inchiostro/85">
            <section>
              <p>
                La presente informativa è resa ai sensi dell'art. 13 del
                Regolamento UE 2016/679 (GDPR) a chi visita{" "}
                <strong>tantobono.it</strong> e descrive come trattiamo i dati
                personali raccolti.
              </p>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Titolare del trattamento
              </h2>
              <p>
                <strong>Trade Consulting Italia s.r.l.s.</strong>
                <br />
                Via dei Quadri 11 — 00062 Bracciano (RM)
                <br />
                P.IVA 17220961001
                <br />
                Email:{" "}
                <a
                  href="mailto:ciao@tantobono.it"
                  className="text-terracotta hover:text-terracotta-deep underline underline-offset-4"
                >
                  ciao@tantobono.it
                </a>
              </p>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Dati trattati
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong>Dati di navigazione</strong>: indirizzo IP, user
                  agent, pagine visitate, data e ora — raccolti
                  automaticamente dai log del server di hosting per finalità
                  tecniche e di sicurezza.
                </li>
                <li>
                  <strong>Dati di contatto</strong>: indirizzo email e
                  contenuto dei messaggi che ci invii volontariamente
                  scrivendo a ciao@tantobono.it.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Finalità e base giuridica
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Rispondere alle richieste inviate via email — base
                  giuridica: art. 6.1.b GDPR (misure precontrattuali / esecuzione
                  contrattuale).
                </li>
                <li>
                  Garantire il funzionamento, la sicurezza e la diagnostica
                  del sito — base giuridica: art. 6.1.f GDPR (legittimo
                  interesse del Titolare).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Conservazione
              </h2>
              <p>
                Le email di contatto sono conservate per il tempo necessario
                a gestire la richiesta e per i successivi 24 mesi per finalità
                amministrative. I log tecnici del server sono conservati per
                un massimo di 30 giorni, salvo diversa necessità per la
                sicurezza.
              </p>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Destinatari e trasferimenti
              </h2>
              <p>
                Il sito è ospitato su <strong>Vercel Inc.</strong> (USA). Il
                trasferimento dei dati avviene in conformità alle Standard
                Contractual Clauses approvate dalla Commissione Europea. Non
                comunichiamo i tuoi dati a terze parti, né li diffondiamo, né
                li trasferiamo per finalità di profilazione.
              </p>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Cookie
              </h2>
              <p>
                Il sito utilizza esclusivamente cookie tecnici. Per i
                dettagli vedi la{" "}
                <Link
                  href="/cookie"
                  className="text-terracotta hover:text-terracotta-deep underline underline-offset-4"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Diritti dell'interessato
              </h2>
              <p>
                Ai sensi degli artt. 15-22 GDPR puoi esercitare in qualsiasi
                momento i diritti di accesso, rettifica, cancellazione,
                limitazione, portabilità e opposizione, scrivendo a{" "}
                <a
                  href="mailto:ciao@tantobono.it"
                  className="text-terracotta hover:text-terracotta-deep underline underline-offset-4"
                >
                  ciao@tantobono.it
                </a>
                . Hai inoltre diritto di proporre reclamo all'Autorità Garante
                per la Protezione dei Dati Personali ({" "}
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta hover:text-terracotta-deep underline underline-offset-4"
                >
                  garanteprivacy.it
                </a>
                ).
              </p>
            </section>

            <section>
              <h2 className="label text-[11px] text-terracotta mb-3">
                Modifiche
              </h2>
              <p>
                Eventuali aggiornamenti a questa informativa saranno
                pubblicati su questa pagina con indicazione della data di
                ultima revisione.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
