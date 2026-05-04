import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["italic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tantobono.it"),
  title: {
    default: "Tanto Bono — Gelato fatto bene",
    template: "%s — Tanto Bono",
  },
  description:
    "Gelato artigianale italiano. Latte vero, frutta di stagione, niente scorciatoie. Distribuito nei locali Love Me e all'ingrosso.",
  openGraph: {
    title: "Tanto Bono — Gelato fatto bene",
    description:
      "Gelato artigianale italiano. Latte vero, frutta di stagione, niente scorciatoie.",
    url: "https://tantobono.it",
    siteName: "Tanto Bono",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanto Bono — Gelato fatto bene",
    description: "Gelato artigianale. Niente coloranti, niente aromi finti.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen bg-crema text-inchiostro">{children}</body>
    </html>
  );
}
