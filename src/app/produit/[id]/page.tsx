import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ProductDetail from "@/components/product/ProductDetail";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Tenue introuvable — MAISON KENTE" };

  return {
    title: `${product.name} — MAISON KENTE`,
    description: `${product.description ?? product.name} — ${formatPrice(product.price)}. Commande directe via WhatsApp.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  return (
    <>
      <Navbar alwaysOpaque />
      <main>
        <ProductDetail product={products[index]} index={index} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
