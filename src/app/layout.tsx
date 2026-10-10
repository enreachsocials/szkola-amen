import type { Metadata } from "next";
import { Bricolage_Grotesque, Archivo } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Szkoła Tańca Amen! — Wrocław",
  description: "Chrześcijańska szkoła tańca we Wrocławiu. Kursy tańca, warsztaty, imprezy taneczne. Projekt Roztańczona Parafia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${bricolage.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
