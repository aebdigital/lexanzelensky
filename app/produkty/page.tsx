import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { ProductBrowser } from "../../components/product-browser";

export const metadata: Metadata = {
  title: "Produkty",
  description:
    "Prehľad polykarbonátových produktov, HPL dosiek, montážneho príslušenstva, trapézov a skleníkov."
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero title="Produkty" />
      <Suspense fallback={<div className="site-container py-20">Načítavam produktový prehľad...</div>}>
        <ProductBrowser />
      </Suspense>
    </main>
  );
}
