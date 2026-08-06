import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Latin Canada — Cinematic Production House",
  description:
    "Latin Canada is a cinematic production house rooted in migration, craftsmanship, and cultural identity. Where Latin roots meet Canadian horizons.",
  icons: {
    icon: "/brand/latincanada-mark.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <LanguageProvider>
          <div className="film-grain" aria-hidden="true" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
