import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Manifesto from "./_components/Manifesto";
import Storia from "./_components/Storia";
import Prodotto from "./_components/Prodotto";
import Gusti from "./_components/Gusti";
import Packaging from "./_components/Packaging";
import B2B from "./_components/B2B";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Storia />
      <Manifesto />
      <Prodotto />
      <Gusti />
      <Packaging />
      <B2B />
      <Footer />
    </>
  );
}
