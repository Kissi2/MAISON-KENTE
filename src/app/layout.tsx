import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/ui/CartDrawer";
import { ACTIVE_THEME } from "@/lib/theme";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAISON KENTE — L'art du pagne, l'héritage des hommes de la terre d'or",
  description:
    "La Maison KENTÉ est une maison de création et de distribution inspirée de l'héritage culturel africain, notamment du Kenté, tissu emblématique de la tradition Ashanti.",
  keywords: [
    "MAISON KENTE",
    "Kenté",
    "pagne africain",
    "tissu Ashanti",
    "mode africaine",
    "tenues cérémonies",
    "ensemble cocooning",
    "prêt-à-porter Abidjan",
  ],
  openGraph: {
    title: "MAISON KENTE — Mode · Élégance · Toi",
    description:
      "L'art du pagne, l'héritage des hommes de la terre d'or. Une maison de création inspirée de l'héritage culturel africain.",
    type: "website",
    locale: "fr_FR",
    siteName: "MAISON KENTE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-theme={ACTIVE_THEME}
      className={`${bodoni.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-paper text-ink font-body">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
